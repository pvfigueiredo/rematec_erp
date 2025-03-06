using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Enderecos;

public class Endereco : IEntity
{
    public Guid Id { get; set; }
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public DateTime LastUpdate { get; set; }
    public string Logradouro { get; set; } = default!;
    public string Numero { get; set; } = default!;
    public string Complemento { get; set; } = default!;
    public string Bairro { get; set; } = default!;
    public string Cidade { get; set; } = default!;
    public string Estado { get; set; } = default!;
    public string CEP { get; set; } = default!;
    public string Pais { get; set; } = default!;

}
