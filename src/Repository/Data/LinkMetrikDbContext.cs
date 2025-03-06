using Application.Interfaces;
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
using Microsoft.Extensions.Configuration;

namespace Repository.Data;

public class LinkMetrikDbContext : DbContext, IDatabaseService
{
    private readonly IConfiguration _configuration;
    public LinkMetrikDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
        Database.EnsureCreated();        
    }
    public DbSet<ContaBancaria> ContasBancarias { get; set; }
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Compra> Compras { get; set; }
    public DbSet<Empresa> Empresas { get; set; }
    public DbSet<Estoque> Estoques { get; set; }
    public DbSet<Fornecedor> Fornecedores { get; set; }
    public DbSet<Funcionario> Funcionarios { get; set; }
    public DbSet<Nfce> Nfces { get; set; }
    public DbSet<Nfe> Nfes { get; set; }
    public DbSet<Nfse> Nfses { get; set; }
    public DbSet<Produto> Produtos { get; set; }
    public DbSet<Venda> Vendas { get; set; }

    public void SaveAsync()
    {
        SaveAsync();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = _configuration.GetConnectionString("LinkMetrikDatabase");
        optionsBuilder.UseSqlServer(connectionString);
    }
}

