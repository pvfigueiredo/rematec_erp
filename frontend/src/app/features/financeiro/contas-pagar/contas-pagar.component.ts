import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContasPagarService } from '@core/services/contas-pagar.service';
import { ContaPagar } from '@core/models/conta-pagar.model';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styleUrls: ['./contas-pagar.component.scss'],
  standalone: false
})
export class ContasPagarComponent implements OnInit {
  filtroForm: FormGroup;
  contas$: Observable<ContaPagar[]>;
  contaSelecionada: ContaPagar | null = null;
  modalCadastroAberto = false;
  modalDetalheAberto = false;
  modalPagamentoAberto = false;

  statusOpcoes = [
    { valor: 'pendente', rotulo: 'Pendente' },
    { valor: 'pago', rotulo: 'Pago' },
    { valor: 'atrasado', rotulo: 'Atrasado' },
    { valor: 'cancelado', rotulo: 'Cancelado' }
  ];

  constructor(
    private contasPagarService: ContasPagarService,
    private fb: FormBuilder
  ) {
    this.filtroForm = this.fb.group({
      dataInicio: [null],
      dataFim: [null],
      status: [''],
      fornecedor: [''],
      categoria: ['']
    });

    // Inicializa o stream de contas que reage às mudanças no filtro
    this.contas$ = this.filtroForm.valueChanges.pipe(
      startWith(this.filtroForm.value),
      switchMap(filtros => this.contasPagarService.listarContas(filtros))
    );
  }

  ngOnInit(): void {
    // Carregar dados iniciais, se necessário
  }

  abrirModalCadastro(): void {
    this.contaSelecionada = null;
    this.modalCadastroAberto = true;
  }

  abrirModalEdicao(conta: ContaPagar): void {
    this.contaSelecionada = conta;
    this.modalCadastroAberto = true;
  }

  fecharModalCadastro(): void {
    this.modalCadastroAberto = false;
  }

  abrirModalDetalhe(conta: ContaPagar): void {
    this.contaSelecionada = conta;
    this.modalDetalheAberto = true;
  }

  fecharModalDetalhe(): void {
    this.modalDetalheAberto = false;
  }

  abrirModalPagamento(conta: ContaPagar): void {
    this.contaSelecionada = conta;
    this.modalPagamentoAberto = true;
  }

  fecharModalPagamento(): void {
    this.modalPagamentoAberto = false;
  }

  efetuarPagamento(dadosPagamento: any): void {
    if (this.contaSelecionada) {
      this.contasPagarService.pagarConta(
        this.contaSelecionada.id,
        dadosPagamento
      ).subscribe(() => {
        this.fecharModalPagamento();
        // Recarregar a lista de contas
        this.filtroForm.updateValueAndValidity();
      });
    }
  }

  cancelarConta(conta: ContaPagar, motivo: string): void {
    this.contasPagarService.cancelarConta(conta.id, motivo)
      .subscribe(() => {
        // Recarregar a lista de contas
        this.filtroForm.updateValueAndValidity();
      });
  }

  excluirConta(conta: ContaPagar): void {
    if (confirm(`Deseja realmente excluir a conta ${conta.descricao}?`)) {
      this.contasPagarService.excluirConta(conta.id)
        .subscribe(() => {
          // Recarregar a lista de contas
          this.filtroForm.updateValueAndValidity();
        });
    }
  }

  gerarRelatorio(): void {
    this.contasPagarService.gerarRelatorio(this.filtroForm.value)
      .subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'relatorio-contas-a-pagar.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  getStatusRotulo(statusValor: string): string {
    const statusEncontrado = this.statusOpcoes.find(s => s.valor === statusValor);
    return statusEncontrado ? statusEncontrado.rotulo : '';
  }
}
