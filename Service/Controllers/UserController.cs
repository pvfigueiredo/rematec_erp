using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.Dtos;
using Service.Models;
using Service.Services;

namespace Service.Controllers
{
    public class UserController : Controller
    {
        [ApiController]
        [Route("api/[controller]")]
        public class UsersController(IUserService userService) : ControllerBase
        {
            private readonly IUserService _userService = userService;

            [HttpGet]
            [Authorize]
            public async Task<ActionResult<IEnumerable<UserDto>>> GetAllUsers()
            {
                var users = await _userService.GetUsersAsync();
                return Ok(users);
            }

            [HttpGet("{id}")]
            [Authorize]
            public async Task<ActionResult<UserDto>> GetUserById(int id)
            {
                var user = await _userService.GetUserByIdAsync(id);
                if (user == null)
                    return NotFound();

                return Ok(user);
            }

            [HttpPost("register")]
            [AllowAnonymous]
            public async Task<ActionResult<UserDto>> Register(CreateUserRequest request)
            {
                try
                {
                    var user = await _userService.CreateUserAsync(request);
                    return CreatedAtAction(nameof(GetUserById), new { id = user?.Id }, user);
                }
                catch (InvalidOperationException ex)
                {
                    return Conflict(new { message = ex.Message });
                }
            }

            [HttpPost("login")]
            [AllowAnonymous]
            public async Task<ActionResult<LoginResponse>> Login(LoginRequest request)
            {
                var response = await _userService.AuthenticateAsync(request);
                if (response == null)
                    return Unauthorized(new { message = "Invalid username or password" });

                return Ok(response);
            }

            [HttpPut("{id}")]
            [Authorize]
            public async Task<ActionResult<UserDto>> UpdateUser(int id, CreateUserRequest request)
            {
                try
                {
                    var user = await _userService.UpdateUserAsync(id, request);
                    if (user == null)
                        return NotFound();

                    return Ok(user);
                }
                catch (InvalidOperationException ex)
                {
                    return Conflict(new { message = ex.Message });
                }
            }

            [HttpDelete("{id}")]
            [Authorize]
            public async Task<IActionResult> DeleteUser(int id)
            {
                var result = await _userService.DeleteUserAsync(id);
                if (!result)
                    return NotFound();

                return NoContent();
            }
        }
    }
}
