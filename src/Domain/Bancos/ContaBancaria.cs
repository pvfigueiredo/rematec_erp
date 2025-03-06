using Domain.Entities;

namespace Domain.Bancos;

public class ContaBancaria : IEntity
{
    public Guid Id { get;set;}
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public DateTime LastUpdate { get;set;}        
    public string Banco { get; set; } = default!;
    public string CodigoBanco { get; set; } = default!;
    public string Agencia { get; set; } = default!;
    public string NumeroConta { get; set; } = default!;
    public TipoConta TipoConta { get; set; }
}
