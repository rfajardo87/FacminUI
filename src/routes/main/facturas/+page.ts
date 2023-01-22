import { axiosInstance } from '../../../shared/API/instance';
import {
  statusFactura,
  facturaPeriodo
} from '../../../shared/API/endpoints/factura';
import type { Option } from '../../../shared/structs/components/combo';
import type { Facturas } from '../../../shared/Models/Facturas';
import type { StatusFactura } from '../../../shared/Models/StatusFactura';
import type { PageLoad } from './$types';

export const load = (async () => {
  const facturas: Facturas[] = [];
  let status: Option[] = [
    { text: 'Pendiente', value: 0 },
    { text: 'Cancelado', value: 1 }
  ];
  try {
    const rsp = await axiosInstance.get(statusFactura);
    const rspFacturas = await axiosInstance.get(facturaPeriodo('2022', '1'));
    status = rsp.data.data.map((sts: StatusFactura) => ({
      text: sts.status,
      value: sts.id
    }));
    facturas.push(...rspFacturas.data.data);
  } catch (error) {
    console.log(error);
  }

  return {
    facturas,
    status
  };
}) satisfies PageLoad;
