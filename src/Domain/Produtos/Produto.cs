using Domain.Entities;

namespace Domain.Produtos;

public class Produto : IEntity
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; init; }
    public DateTime LastUpdate { get; set; }
    public int Codigo { get; set; } = default!;
    public string Nome { get; set; } = default!;
    public string Descricao { get; set; } = default!;
    public string EAN { get; set; } = default!;
    public decimal PrecoVenda { get; set; }
    public decimal PrecoCusto { get; set; }
    public decimal QuantidadeEmEstoque { get; set; }
}
