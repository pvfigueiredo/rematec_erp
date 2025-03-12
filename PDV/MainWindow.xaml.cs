using PDV.ViewModel;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

namespace PDV
{
    public partial class MainWindow : Window
    {        
        private readonly MainWindowViewModel viewModel = new ();

        public MainWindow()
        {
            InitializeComponent();
            DataContext = viewModel;

            // Configurar eventos de teclado para toda a janela
            PreviewKeyDown += MainWindow_PreviewKeyDown;
        }
        private void MainWindow_PreviewKeyDown(object sender, KeyEventArgs e)
        {
            // Atalhos de função
            switch (e.Key)
            {
                case Key.F1:
                    ExibirAjuda();
                    e.Handled = true;
                    break;
                case Key.F2:
                    ExcluirItem();
                    e.Handled = true;
                    break;
                case Key.F3:
                    AplicarDesconto();
                    e.Handled = true;
                    break;
                case Key.F4:
                    FocarPesquisa();
                    e.Handled = true;
                    break;
                case Key.F5:
                    SelecionarCliente();
                    e.Handled = true;
                    break;
                case Key.F6:
                    CancelarVenda();
                    e.Handled = true;
                    break;
                case Key.F10:
                    FinalizarVenda();
                    e.Handled = true;
                    break;
            }
        }

        // Métodos para campo de pesquisa
        private void TxtPesquisa_GotFocus(object sender, RoutedEventArgs e)
        {
            TextBox tb = sender as TextBox;
            if (tb != null && tb.Text == "Pesquisar produto (F4)")
            {
                tb.Text = string.Empty;
            }
        }

        private void TxtPesquisa_LostFocus(object sender, RoutedEventArgs e)
        {
            TextBox tb = sender as TextBox;
            if (tb != null && string.IsNullOrWhiteSpace(tb.Text))
            {
                tb.Text = "Pesquisar produto (F4)";
            }
        }

        private void TxtPesquisa_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                PesquisarProduto();
                e.Handled = true;
            }
        }
        
        private void FocarPesquisa()
        {
            TxtPesquisa.Focus();            
        }

        private void ExibirAjuda()
        {
            // Implementar exibição de ajuda
            MessageBox.Show("Função: Exibir Ajuda");
        }

        private void ExcluirItem()
        {
            // Implementar exclusão de item
            MessageBox.Show("Função: Excluir Item");
        }

        private void AplicarDesconto()
        {
            // Implementar aplicação de desconto
            MessageBox.Show("Função: Aplicar Desconto");
        }

        private void SelecionarCliente()
        {
            // Implementar seleção de cliente
            MessageBox.Show("Função: Selecionar Cliente");
        }

        private void CancelarVenda()
        {
            // Implementar cancelamento de venda
            MessageBox.Show("Função: Cancelar Venda");
        }

        private void FinalizarVenda()
        {
            // Implementar finalização de venda
            MessageBox.Show("Função: Finalizar Venda");
        }

        private void PesquisarProduto()
        {
            
            MessageBox.Show("Função: Pesquisar Produto");
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var button = sender as Button;
            if (button != null)
            {
                switch (button.Name)
                {
                    case "BtnAjuda":
                        ExibirAjuda();
                        break;
                    case "BtnExcluir":
                        ExcluirItem();
                        break;
                    case "BtnDesconto":
                        AplicarDesconto();
                        break;
                    case "BtnPesquisa":
                        FocarPesquisa();
                        break;
                    case "BtnCliente":
                        SelecionarCliente();
                        break;
                    case "BtnCancelar":
                        CancelarVenda();
                        break;
                    case "BtnFinalizar":
                        FinalizarVenda();
                        break;
                }
            }
        }
    }
}