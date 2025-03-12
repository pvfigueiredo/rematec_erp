namespace PDV.Models;

public class Produto
{
    public string Ean { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public decimal Quantidade { get; set; }
    public decimal Preco { get; set; }
}
