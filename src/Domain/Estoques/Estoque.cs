using Domain.Entities;
using Domain.Produtos;

namespace Domain.Estoques;

public class Estoque : IEntity
{    
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public DateTime LastUpdate { get; set; }
    public int ProdutoId { get; set; }
    public Produto Produto { get; set; } = default!;
    public int Quantidade { get; set; }
    public string Localizacao { get; set; } = default!;
}
