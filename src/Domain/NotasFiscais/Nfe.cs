using Domain.Entities;
using Domain.Fornecedores;
using Domain.Produtos;

namespace Domain.NotasFiscais;

public class Nfe : IEntity
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; init; }
    public DateTime LastUpdate { get; set; }
    public DateTime DataEmissao { get; set; }
    public Fornecedor? Fornecedor { get; set; }
    public IEnumerable<Produto> Itens { get; set; } = [];
    public decimal ValorTotal { get; set; }
}
