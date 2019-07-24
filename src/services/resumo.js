import { URL_APi } from './base';

export function consultarResumo() {
   return fetch(`${URL_APi}/resumo`).then(resultado => resultado.json());
}
