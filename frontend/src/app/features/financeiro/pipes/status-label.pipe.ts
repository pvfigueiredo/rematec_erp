import { Pipe, PipeTransform } from '@angular/core';

interface StatusOpcao {
  valor: string;
  rotulo: string;
}

@Pipe({
  name: 'statusLabel',
  standalone: false
})
export class StatusLabelPipe implements PipeTransform {
  transform(statusValor: string, opcoes: StatusOpcao[]): string {
    const statusEncontrado = opcoes.find(s => s.valor === statusValor);
    return statusEncontrado ? statusEncontrado.rotulo : '';
  }
}
