using Domain.Empresas;
using Domain.Entities;

namespace Domain.Usuarios;

public class Usuario : IEntity
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public DateTime LastUpdate { get; set; }
    public string Nome { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string Senha { get; set; } = default!;        
}
