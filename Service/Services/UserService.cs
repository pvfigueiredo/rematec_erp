using Microsoft.EntityFrameworkCore;
using Service.Data;
using Service.Dtos;
using Service.Models;

namespace Service.Services;

public class UserService(ApplicationDbContext context, ITokenService tokenService) : IUserService
{
    private readonly ApplicationDbContext _context = context;
    private readonly ITokenService _tokenService = tokenService;

    public async Task<LoginResponse?> AuthenticateAsync(LoginRequest request)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

        if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
        {
            return null;
        }

        var token = _tokenService.GenerateToken(user);
        user.Token = token;
        user.LastLogin = DateTime.Now;
        await _context.SaveChangesAsync();

        return new LoginResponse
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Token = token
        };
    }

    public async Task<UserDto> CreateUserAsync(CreateUserRequest request)
    {
        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
        { 
            throw new InvalidOperationException("User already exists");
        }

        var hash = BCrypt.Net.BCrypt.HashPassword(request.Password);
        var user = new User
        {
            Name = request.Name,
            Email = request.Email,
            Password = request.Password,           
        };

        var token = _tokenService.GenerateToken(user);
        user.Token = token;
        await _context.SaveChangesAsync();

        return new UserDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Token = token
        };
    }

    public async Task<bool> DeleteUserAsync(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null) return false;
        _context.Users.Remove(user);
        await _context.SaveChangesAsync();
        return true;

    }

    public async Task<UserDto?> GetUserByIdAsync(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null) return null;

        return new UserDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Token = user.Token ?? string.Empty
        };
    }

    public async Task<UserDto?> GetUserByEmailAsync(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        if (user == null) return null;

        return new UserDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Token = user.Token ?? string.Empty
        };
    }

    public async Task<IEnumerable<UserDto>> GetUsersAsync()
    {
        return await _context.Users
            .Select( u => new UserDto
            { 
                Id = u.Id,
                Name = u.Name,
                Email = u.Email,
                Token = u.Token ?? string.Empty
            }).ToListAsync();
    }

    public async Task<UserDto?> UpdateUserAsync(int id, CreateUserRequest request)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null) return null;

        if (await _context.Users.AnyAsync(u => u.Email == request.Email && u.Id != id))
        {
            throw new InvalidOperationException("User already exists");
        }

        user.Email = request.Email;
        
        if(!string.IsNullOrEmpty(request.Password))
        {
            user.Password = BCrypt.Net.BCrypt.HashPassword(request.Password);
        }

        await _context.SaveChangesAsync();
        return new UserDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Token = user.Token ?? string.Empty
        };
    }
}
