import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContasPagarService } from '@core/services/contas-pagar.service';
import { ContaPagar } from '@core/models/conta-pagar.model';

@Component({
  selector: 'app-conta-pagar-form',
  templateUrl: './conta-pagar-form.component.html',
  styleUrls: ['./conta-pagar-form.component.scss'],
  standalone: false
})
export class ContaPagarFormComponent implements OnInit {
  @Input() conta: ContaPagar | null = null;
  @Output() fecharModal = new EventEmitter<void>();
  @Output() salvarConta = new EventEmitter<void>();

  contaForm: FormGroup;
  enviando = false;

  categorias = [
    'Fornecedores', 'Aluguel', 'Água', 'Energia', 'Internet',
    'Telefone', 'Impostos', 'Salários', 'Equipamentos', 'Software',
    'Marketing', 'Manutenção', 'Outros'
  ];

  constructor(
    private fb: FormBuilder,
    private contasPagarService: ContasPagarService
  ) {
    this.contaForm = this.fb.group({
      descricao: ['', [Validators.required]],
      fornecedor: ['', [Validators.required]],
      valorTotal: [0, [Validators.required, Validators.min(0.01)]],
      dataVencimento: [null, [Validators.required]],
      categoria: ['', [Validators.required]],
      parcelas: [1, [Validators.min(1)]],
      observacoes: [''],
      notificar: [true]
    });
  }

  ngOnInit(): void {
    if (this.conta) {
      this.contaForm.patchValue({
        descricao: this.conta.descricao,
        fornecedor: this.conta.fornecedor,
        valorTotal: this.conta.valorTotal,
        dataVencimento: this.formatarDataParaInput(this.conta.dataVencimento),
        categoria: this.conta.categoria,
        parcelas: this.conta.parcelas || 1,
        observacoes: this.conta.observacoes || '',
        notificar: this.conta.notificar !== undefined ? this.conta.notificar : true
      });
    }
  }

  formatarDataParaInput(data: Date): string {
    const d = new Date(data);
    return d.toISOString().split('T')[0];
  }

  onSubmit(): void {
    if (this.contaForm.invalid) {
      this.contaForm.markAllAsTouched();
      return;
    }

    this.enviando = true;

    if (this.conta) {
      // Atualização
      this.contasPagarService.atualizarConta(
        this.conta.id,
        this.contaForm.value
      ).subscribe({
        next: () => {
          this.enviando = false;
          this.salvarConta.emit();
          this.fecharModal.emit();
        },
        error: (err) => {
          this.enviando = false;
          console.error('Erro ao atualizar conta', err);
          // Tratamento de erro aqui
        }
      });
    } else {
      // Cadastro
      this.contasPagarService.cadastrarConta(
        this.contaForm.value
      ).subscribe({
        next: () => {
          this.enviando = false;
          this.salvarConta.emit();
          this.fecharModal.emit();
        },
        error: (err) => {
          this.enviando = false;
          console.error('Erro ao cadastrar conta', err);
        }
      });
    }
  }

  fechar(): void {
    this.fecharModal.emit();
  }
}
