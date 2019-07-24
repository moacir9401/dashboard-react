import {URL_APi} from './base';

export function consultarFatura() {
    return fetch(`${URL_APi}/faturamento`).then(resultado => resultado.json());
}