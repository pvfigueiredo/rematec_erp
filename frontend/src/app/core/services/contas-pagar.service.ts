import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { ContaPagar } from '@core/models/conta-pagar.model';

@Injectable({
  providedIn: 'root'
})
export class ContasPagarService {
  private apiUrl = `${environment.apiUrl}/contas-pagar`;

  constructor(private http: HttpClient) {}

  listarContas(filtros?: any): Observable<ContaPagar[]> {
    return this.http.get<ContaPagar[]>(this.apiUrl, { params: filtros });
  }

  obterContaPorId(id: number): Observable<ContaPagar> {
    return this.http.get<ContaPagar>(`${this.apiUrl}/${id}`);
  }

  cadastrarConta(conta: Omit<ContaPagar, 'id'>): Observable<ContaPagar> {
    return this.http.post<ContaPagar>(this.apiUrl, conta);
  }

  atualizarConta(id: number, conta: Partial<ContaPagar>): Observable<ContaPagar> {
    return this.http.put<ContaPagar>(`${this.apiUrl}/${id}`, conta);
  }

  pagarConta(id: number, dadosPagamento: {
    dataPagamento: Date,
    formaPagamento: string,
    comprovante?: string
  }): Observable<ContaPagar> {
    return this.http.patch<ContaPagar>(`${this.apiUrl}/${id}/pagar`, dadosPagamento);
  }

  cancelarConta(id: number, motivoCancelamento: string): Observable<ContaPagar> {
    return this.http.patch<ContaPagar>(`${this.apiUrl}/${id}/cancelar`, { motivoCancelamento });
  }

  excluirConta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  gerarRelatorio(filtros: any): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/relatorio`, {
      params: filtros,
      responseType: 'blob'
    });
  }
}
