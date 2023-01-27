import { axiosInstance } from '../../../shared/API/instance';
import { statusFactura } from '../../../shared/API/endpoints/factura';
import { reqFacturas } from './page';
import type { Option } from '../../../shared/structs/components/combo';
import type { Facturas } from '../../../shared/Models/Facturas';
import type { StatusFactura } from '../../../shared/Models/StatusFactura';
import type { PageLoad } from './$types';

export const load = (async () => {
  const facturas: Facturas[] = [];
  let status: Option[] = [];
  const current = new Date();
  const fecha = {
    year: `${current.getFullYear()}`,
    month: `${current.getMonth() + 1}`
  };
  try {
    const rsp = await axiosInstance.get(statusFactura);
    const rspFacturas = await reqFacturas(fecha.year, fecha.month);
    status = rsp.data.data.map((sts: StatusFactura) => ({
      text: sts.status,
      value: sts.id
    }));
    facturas.push(...rspFacturas.facturas);
  } catch (error) {
    console.log(error);
  }

  return {
    facturas,
    status,
    ...fecha
  };
}) satisfies PageLoad;
