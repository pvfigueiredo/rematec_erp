using Service.Models;

namespace Service.Services;

public interface ITokenService
{
    string GenerateToken(User user);
    int? ValidateToken(string token);
}
