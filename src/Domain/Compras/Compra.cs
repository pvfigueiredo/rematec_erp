using Domain.Entities;
using Domain.Fornecedores;
using Domain.Produtos;

namespace Domain.Compras
{    
    public class Compra : IEntity
    {
        public Guid Id { get; set; }        
        public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; }
        public required Fornecedor Fornecedor { get; set; }
        public DateTime DataCompra { get; set; }
        public IEnumerable<Produto> Itens { get; set; } = [];
        public decimal ValorTotal { get; set; }
    }
}
