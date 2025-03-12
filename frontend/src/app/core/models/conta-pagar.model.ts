export interface ContaPagar {
  id: number;
  descricao: string;
  fornecedor: string;
  valorTotal: number;
  dataVencimento: Date;
  dataPagamento?: Date;
  status: 'pendente' | 'pago' | 'atrasado' | 'cancelado';
  comprovante?: string;
  categoria: string;
  formaPagamento?: string;
  parcelas: number;
  observacoes?: string;
  notificar?: boolean;
  usuarioCriacao: string;
  dataCriacao: Date;
  usuarioAtualizacao?: string;
  dataAtualizacao?: Date;
}
