import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaPagar } from '@core/models/conta-pagar.model';

@Component({
  selector: 'app-conta-pagar-pagamento',
  templateUrl: './conta-pagar-pagamento.component.html',
  styleUrls: ['./conta-pagar-pagamento.component.scss'],
  standalone: false
})
export class ContaPagarPagamentoComponent implements OnInit {
  @Input() conta: ContaPagar | null = null;
  @Output() fecharModal = new EventEmitter<void>();
  @Output() confirmarPagamento = new EventEmitter<any>();

  pagamentoForm: FormGroup;

  formasPagamento = [
    'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito',
    'Transferência Bancária', 'PIX', 'Boleto', 'Cheque'
  ];

  arquivoComprovante: File | null = null;

  constructor(private fb: FormBuilder) {
    this.pagamentoForm = this.fb.group({
      dataPagamento: [new Date().toISOString().split('T')[0], [Validators.required]],
      formaPagamento: ['', [Validators.required]],
      comprovante: [null],
      observacao: ['']
    });
  }

  ngOnInit(): void {
    // Inicialização adicional se necessário
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.arquivoComprovante = file;
    }
  }

  onSubmit(): void {
    if (this.pagamentoForm.invalid) {
      this.pagamentoForm.markAllAsTouched();
      return;
    }

    const dadosPagamento = {
      ...this.pagamentoForm.value,
      comprovante: this.arquivoComprovante
    };

    this.confirmarPagamento.emit(dadosPagamento);
  }

  fechar(): void {
    this.fecharModal.emit();
  }
}
