import { Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  iconPath: string;
}

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
  standalone: false
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    {
      title: 'Gestão Financeira',
      description: 'Controle completo de contas a pagar e receber, fluxo de caixa, conciliação bancária e relatórios financeiros detalhados.',
      iconPath: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z'
    },
    {
      title: 'Controle de Estoque',
      description: 'Gestão eficiente de produtos, controle de movimentações, alertas de estoque mínimo e rastreabilidade completa.',
      iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z'
    },
    {
      title: 'Gestão de Clientes',
      description: 'CRM integrado para acompanhamento de leads, histórico de vendas, segmentação e comunicação personalizada.',
      iconPath: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
    }
  ];
}
