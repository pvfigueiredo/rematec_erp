import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContaPagar } from '@core/models/conta-pagar.model';

@Component({
  selector: 'app-conta-pagar-detalhe',
  templateUrl: './conta-pagar-detalhe.component.html',
  styleUrls: ['./conta-pagar-detalhe.component.scss'],
  standalone: false
})
export class ContaPagarDetalheComponent {
  @Input() conta: ContaPagar | null = null;
  @Output() fecharModal = new EventEmitter<void>();

  constructor() {}

  fechar(): void {
    this.fecharModal.emit();
  }

  baixarComprovante(): void {
    if (this.conta?.comprovante) {
      // Lógica para download do comprovante
      window.open(this.conta.comprovante, '_blank');
    }
  }
}
