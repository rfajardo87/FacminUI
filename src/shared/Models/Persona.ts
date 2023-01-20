import type { Registro } from './Registro';

export interface Persona extends Registro {
  id: string;
  tipo: string;
  descripcion: string;
  statusID: string;
  tipoDescripcion: string;
}
