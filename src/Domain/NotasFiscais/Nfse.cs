using Domain.Clientes;
using Domain.Empresas;
using Domain.Entities;

namespace Domain.NotasFiscais
{    
    public class Nfse : IEntity
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; }        
        public DateTime DataEmissao { get; set; }
        public Empresa? Prestador { get; set; }
        public Cliente? Tomador { get; set; }
        public string Cnae { get; set; } = string.Empty;
        public string DescricaoServico { get; set; } = string.Empty;
        public decimal ValorServico { get; set; }
    }
}
