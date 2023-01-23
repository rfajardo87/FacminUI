import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-aio';
import { axiosInstance } from '../../../shared/API/instance';
import { factura, facturaPeriodo } from '../../../shared/API/endpoints/factura';
import type { Facturas } from '../../../shared/Models/Facturas';

export const loadFacturas = () => {
  try {
    Loading.hourglass('Cargando');
    axiosInstance.post(factura);
    Notify.success('Facturas cargadas', {
      position: 'right-bottom'
    });
  } catch (error) {
    const err = `${error}`;
    console.log(error);
    Notify.failure(err);
  } finally {
    Loading.remove();
  }
};

const filterFacturas = (facturas: Facturas[], filterText = '') => {
  if (filterText) {
    const rgx = new RegExp(filterText, 'ig');
    return facturas.filter((f: Facturas) =>
      [f.emisor, f.receptor, f.serie, f.folio]
        .map((v) => rgx.test(v))
        .includes(true)
    );
  }
  return facturas;
};

const filterStatus = (facturas: Facturas[], statusID = '-1') => {
  if (statusID) {
    return facturas.filter((f: Facturas) => f.statusID === statusID);
  }
  return facturas;
};

export const facturasDisplay = (
  facturas: Facturas[],
  find = '',
  statusID = '-1'
) => {
  let filters: Facturas[] = facturas;
  if (find) {
    filters = filterFacturas(filters, find);
  }
  if (statusID != '-1') {
    filters = filterStatus(filters, statusID);
  }
  return filters;
};

export const reqFacturas = async (year: string, month: string) => {
  let facturas = [];
  try {
    const facutrasList = await axiosInstance.get(facturaPeriodo(year, month));
    facturas = await facutrasList.data.data;
  } catch (error) {
    console.log(error);
  }
  return {
    facturas
  };
};

export const reporte = async (year: string, mes: string) => {
  Loading.hourglass();
  try {
    const req = await axiosInstance.post(facturaPeriodo(year, mes));
    const rsp = await req.data;
    if (rsp.tipo) {
      throw new Error(rsp.mensajes);
    }
    rsp.mensajes.forEach((mensaje: string) => {
      Notify.success(mensaje);
    });
  } catch (error) {
    Notify.failure(`${error}`);
  } finally {
    Loading.remove();
  }
};
