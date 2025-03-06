using Domain.Enderecos;

namespace Domain.Clientes;

public class Cliente
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = default!;
    public TipoCliente TipoCliente  { get; set; }
    public string Telefone { get; set; } = default!;
    public Endereco Endereco { get; set; } = default!;
    public string Email { get; set; } = default!;
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public DateTime LastUpdate { get; set; }
    
}
