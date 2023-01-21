import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-aio';
import { axiosInstance } from '../../../shared/API/instance';
import { factura } from '../../../shared/API/endpoints/factura';
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
    return facturas.filter(
      (f: Facturas) =>
        ![f.emisor, f.receptor, f.serie, f.folio]
          .map((v) => rgx.test(v))
          .includes(false)
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
