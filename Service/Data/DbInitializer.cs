using Service.Models;

namespace Service.Data;

public static class DbInitializer
{
    public static void Initialize(ApplicationDbContext context)
    {
        context.Database.EnsureCreated();

        if (context.Users.Any())
        {
            return;
        }

        var users = new User[]
        {
            new User
            {
                Name = "admin",
                Email = "admin@email.com",
                Password = BCrypt.Net.BCrypt.HashPassword("admin123"),
                CreatedAt = DateTime.UtcNow
            }
        };

        context.Users.AddRange(users);
        context.SaveChanges();
    }
}