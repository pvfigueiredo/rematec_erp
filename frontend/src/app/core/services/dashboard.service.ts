import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/dashboard/summary`)
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar dados do dashboard:', error);
          // Em desenvolvimento, retornamos dados mockados caso a API não esteja disponível
          return of(this.getMockDashboardData());
        })
      );
  }

  // Método para gerar dados mockados para desenvolvimento
  private getMockDashboardData(): any {
    return {
      financials: {
        totalRevenue: 152870.54,
        totalExpenses: 87456.32,
        revenueTrend: 12.5,
        expensesTrend: 8.2,
        monthlyData: [
          { month: 'Jan', revenue: 12500, expenses: 8200 },
          { month: 'Fev', revenue: 13200, expenses: 7800 },
          { month: 'Mar', revenue: 14500, expenses: 9100 },
          { month: 'Abr', revenue: 12800, expenses: 8500 },
          { month: 'Mai', revenue: 15700, expenses: 9300 },
          { month: 'Jun', revenue: 16800, expenses: 10200 }
        ]
      },
      customers: {
        newCustomers: 43,
        customersTrend: 15.3,
        recentCustomers: [
          {
            id: 1,
            name: 'João Silva',
            email: 'joao.silva@exemplo.com',
            phone: '(11) 98765-4321',
            registrationDate: '2023-06-15',
            totalPurchases: 5
          },
          {
            id: 2,
            name: 'Maria Oliveira',
            email: 'maria.oliveira@exemplo.com',
            phone: '(11) 91234-5678',
            registrationDate: '2023-06-12',
            totalPurchases: 3
          },
          {
            id: 3,
            name: 'Carlos Santos',
            email: 'carlos.santos@exemplo.com',
            phone: '(21) 99876-5432',
            registrationDate: '2023-06-10',
            totalPurchases: 2
          },
          {
            id: 4,
            name: 'Ana Pereira',
            email: 'ana.pereira@exemplo.com',
            phone: '(31) 98765-1234',
            registrationDate: '2023-06-08',
            totalPurchases: 4
          },
          {
            id: 5,
            name: 'Fernando Costa',
            email: 'fernando.costa@exemplo.com',
            phone: '(41) 99876-2345',
            registrationDate: '2023-06-05',
            totalPurchases: 1
          }
        ]
      },
      inventory: {
        lowStockItems: 12,
        lowStockTrend: -5.4,
        totalItems: 543
      },
      sales: {
        byCategory: [
          { category: 'Eletrônicos', value: 45600, color: '#1976d2' },
          { category: 'Móveis', value: 32400, color: '#4caf50' },
          { category: 'Vestuário', value: 28700, color: '#ff9800' },
          { category: 'Livros', value: 12500, color: '#9c27b0' },
          { category: 'Outros', value: 8700, color: '#607d8b' }
        ],
        topProducts: [
          { id: 1, name: 'Smartphone XYZ', category: 'Eletrônicos', sales: 143, revenue: 128700, stock: 35 },
          { id: 2, name: 'Notebook ABC', category: 'Eletrônicos', sales: 89, revenue: 267000, stock: 12 },
          { id: 3, name: 'Mesa de Escritório', category: 'Móveis', sales: 78, revenue: 46800, stock: 8 },
          { id: 4, name: 'Cadeira Ergonômica', category: 'Móveis', sales: 65, revenue: 32500, stock: 15 },
          { id: 5, name: 'Camiseta Premium', category: 'Vestuário', sales: 210, revenue: 12600, stock: 45 },
          { id: 6, name: 'Tênis Esportivo', category: 'Vestuário', sales: 134, revenue: 26800, stock: 23 },
          { id: 7, name: 'Fone de Ouvido Bluetooth', category: 'Eletrônicos', sales: 156, revenue: 15600, stock: 7 },
          { id: 8, name: 'Monitor 27"', category: 'Eletrônicos', sales: 67, revenue: 53600, stock: 9 },
          { id: 9, name: 'SSD 1TB', category: 'Eletrônicos', sales: 98, revenue: 39200, stock: 18 },
          { id: 10, name: 'Livro de Negócios', category: 'Livros', sales: 45, revenue: 2250, stock: 32 }
        ]
      }
    };
  }
}
