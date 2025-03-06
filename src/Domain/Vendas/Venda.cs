using Domain.Clientes;
using Domain.Entities;
using Domain.Produtos;

namespace Domain.Vendas
{    
    public class Venda : IEntity
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; }
        public int NumeroNotaFiscal { get; set; }
        public int SerieNotaFiscal { get; set; }
        public Cliente? Cliente { get; set; }
        public DateTime DataVenda { get; set; }        
        public IEnumerable<Produto>? Itens { get; set; }
        public StatusVenda StatusVenda { get; set; }
        public decimal ValorTotal { get; set; }        
        public FormaPagamento FormaPagamento { get; set; }
        
    }
}
