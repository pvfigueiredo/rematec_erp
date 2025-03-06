import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@core/services/sidebar.service';

interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
      route: '/dashboard'
    },
    {
      label: 'Gestão Financeira',
      icon: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
      expanded: false,
      children: [
        {
          label: 'Contas a Pagar',
          route: '/financeiro/contas-pagar'
        },
        {
          label: 'Contas a Receber',
          route: '/financeiro/contas-receber'
        },
        {
          label: 'Fluxo de Caixa',
          route: '/financeiro/fluxo-caixa'
        },
        {
          label: 'Conciliação Bancária',
          route: '/financeiro/conciliacao'
        }
      ]
    },
    {
      label: 'Controle de Estoque',
      icon: '<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
      expanded: false,
      children: [
        {
          label: 'Produtos',
          route: '/estoque/produtos'
        },
        {
          label: 'Movimentações',
          route: '/estoque/movimentacoes'
        },
        {
          label: 'Inventário',
          route: '/estoque/inventario'
        },
        {
          label: 'Ajustes de Estoque',
          route: '/estoque/ajustes'
        }
      ]
    },
    {
      label: 'Gestão de Clientes',
      icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
      expanded: false,
      children: [
        {
          label: 'Clientes',
          route: '/clientes'
        },
        {
          label: 'Leads',
          route: '/clientes/leads'
        },
        {
          label: 'Segmentação',
          route: '/clientes/segmentacao'
        },
        {
          label: 'Histórico de Vendas',
          route: '/clientes/historico'
        }
      ]
    },
    {
      label: 'Vendas',
      icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
      expanded: false,
      children: [
        {
          label: 'Pedidos',
          route: '/vendas/pedidos'
        },
        {
          label: 'Orçamentos',
          route: '/vendas/orcamentos'
        },
        {
          label: 'Devoluções',
          route: '/vendas/devolucoes'
        },
        {
          label: 'Comissões',
          route: '/vendas/comissoes'
        }
      ]
    },
    {
      label: 'Compras',
      icon: '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
      expanded: false,
      children: [
        {
          label: 'Fornecedores',
          route: '/compras/fornecedores'
        },
        {
          label: 'Ordens de Compra',
          route: '/compras/ordens'
        },
        {
          label: 'Cotações',
          route: '/compras/cotacoes'
        }
      ]
    },
    {
      label: 'Relatórios',
      icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
      route: '/relatorios'
    },
    {
      label: 'Configurações',
      icon: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
      route: '/configuracoes'
    }
  ];

  constructor(public sidebarService: SidebarService) {}

  ngOnInit(): void {}

  toggleSubmenu(menuItem: MenuItem): void {
    if (!this.sidebarService.collapsed) {
      menuItem.expanded = !menuItem.expanded;
    }
  }

  isActive(route: string): boolean {
    // In a real app, you would check if the current route matches
    // For now, we'll just return false
    return false;
  }
}
