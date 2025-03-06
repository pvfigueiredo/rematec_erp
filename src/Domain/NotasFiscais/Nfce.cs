using Domain.Clientes;
using Domain.Entities;
using Domain.Produtos;

namespace Domain.NotasFiscais;

public class Nfce : IEntity
{      
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; init; }
    public DateTime LastUpdate { get; set; } = DateTime.UtcNow;
    public DateTime DataEmissao { get; set; }
    public Cliente? Cliente { get; set; }
    public IEnumerable<Produto>? Itens { get; set; }
    public decimal ValorTotal { get; set; }
}
