using Domain.Enderecos;
using Domain.Entities;
using System.ComponentModel;

namespace Domain.Empresas
{    
    public class Empresa : IEntity
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; init; }
        public DateTime LastUpdate { get; set; }
        public string RazaoSocial { get; set; } = default!;
        public string NomeFantasia { get; set; } = default!;
        public string CNPJ { get; set; } = default!;
        public Endereco Endereco { get; set; } = default!;
        public string Telefone { get; set; } = default!;
        public string Email { get; set; } = default!;
    }
}
