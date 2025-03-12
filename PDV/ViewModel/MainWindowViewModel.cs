using PDV.Models;
using System.ComponentModel;
using System.Windows.Threading;

namespace PDV.ViewModel;

public class MainWindowViewModel : INotifyPropertyChanged
{
    private DispatcherTimer timer;
    private string _dataHora = DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss");
    public string DataHora 
    {
        get => _dataHora;
        set
        {
            if (_dataHora != value)
            {
                _dataHora = value;
                OnPropertyChanged(nameof(DataHora));
            }
        }
    }

    public event PropertyChangedEventHandler? PropertyChanged;

    public ISet<Produto> Produtos { set; get; } = new HashSet<Produto>();
    public MainWindowViewModel()
    {
        // Carregar produtos
        Produtos.Add(new Produto { Descricao = "Água Mineral 500ml", Quantidade = 2, Preco = 5.00m });
        Produtos.Add(new Produto { Descricao = "Pão Francês", Quantidade = 1, Preco = 0.75m });
        Produtos.Add(new Produto { Descricao = "Refrigerante 2L", Quantidade = 1, Preco = 7.90m });
        // Configurar timer para atualizar data e hora
        timer = new DispatcherTimer();
        timer.Interval = TimeSpan.FromSeconds(1);
        timer.Tick += Timer_Tick!;
        timer.Start();
        // Atualizar data e hora inicial
        AtualizarDataHora();
    }
    private void Timer_Tick(object sender, EventArgs e)
    {
        AtualizarDataHora();
    }
    private void AtualizarDataHora()
    {
        DataHora = DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss");
    }

    protected virtual void OnPropertyChanged(string propertyName)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}
