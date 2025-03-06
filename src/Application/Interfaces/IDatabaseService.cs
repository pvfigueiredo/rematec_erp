using Domain.Bancos;
using Domain.Clientes;
using Domain.Compras;
using Domain.Empresas;
using Domain.Estoques;
using Domain.Fornecedores;
using Domain.Funcionarios;
using Domain.NotasFiscais;
using Domain.Produtos;
using Domain.Vendas;
using Microsoft.EntityFrameworkCore;

namespace Application.Interfaces;

public interface IDatabaseService
{
    DbSet<ContaBancaria> ContasBancarias { get; set; }
    DbSet<Cliente> Clientes{ get; set; }
    DbSet<Compra> Compras { get; set; }
    DbSet<Empresa> Empresas { get; set; }
    DbSet<Estoque> Estoques { get; set; }
    DbSet<Fornecedor> Fornecedores { get; set; }
    DbSet<Funcionario> Funcionarios { get; set; }
    DbSet<Nfce> Nfces { get; set; }
    DbSet<Nfe> Nfes { get; set; }
    DbSet<Nfse> Nfses { get; set; }
    DbSet<Produto> Produtos { get; set; }
    DbSet<Venda> Vendas { get; set; }
    void SaveAsync();
}