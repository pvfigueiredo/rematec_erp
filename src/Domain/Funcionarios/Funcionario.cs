using Domain.Enderecos;
using Domain.Entities;

namespace Domain.Funcionarios
{
    public class Funcionario : IEntity
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
        public DateTime LastUpdate { get; set; }        
        public string Nome { get; set; } = string.Empty;
        public string CPF { get; set; } = string.Empty;
        public string Cargo { get; set; } = string.Empty;
        public Endereco Endereco { get; set; } = default!;
        public DateTime DataAdmissao { get; set; }
        public decimal Salario { get; set; }
    }
}
