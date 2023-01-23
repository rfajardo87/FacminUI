export const statusFactura = 'StatusFactura';

export const factura = 'Factura';

export const facturaPeriodo = (year: string, month: string) => [factura, year, month].join('/');
