using Service.Dtos;
using Service.Models;

namespace Service.Services;

public interface IUserService
{
    Task<IEnumerable<UserDto>> GetUsersAsync();
    Task<UserDto?> GetUserByIdAsync(int id);
    Task<UserDto?> GetUserByEmailAsync(string email);
    Task<UserDto> CreateUserAsync(CreateUserRequest request);
    Task<LoginResponse?> AuthenticateAsync(LoginRequest request);
    Task<bool> DeleteUserAsync(int id);
    Task<UserDto?> UpdateUserAsync(int id, CreateUserRequest request);
}
