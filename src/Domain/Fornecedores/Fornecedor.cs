using Domain.Bancos;
using Domain.Enderecos;
using Domain.Entities;

namespace Domain.Fornecedores;

public class Fornecedor : IEntity
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = default!;
    public string Telefone { get; set; } = default!;
    public string Email { get; set; } = default!;
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public DateTime LastUpdate { get; set; }
    public string CNPJ { get; set; } = default!;
    public Endereco Endereco { get; set; } = default!;
    public string Contato { get; set; } = default!;
    public string Site { get; set; } = default!;
    public ContaBancaria ContaBancaria { get; set; } = default!;
    public string Observacoes { get; set; } = default!;

}
