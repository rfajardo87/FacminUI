export interface Concepto {
  UUID: string;
}

export interface Facturas {
  UUID: string;
  folio: string;
  serie: string;
  emisor: string;
  receptor: string;
  fechaTimbrado: Date;
  statusID: string;
  uuidRelacionado: string;
  residencia: string;
  subtotal: number;
  iva: number;
  total: number;
  original: number;
  moneda: string;
  forma: string;
  metodo: string;
  fechaPago: Date;
  conceptos: Concepto[];
  creado: Date;
  actualizado: Date;
}
