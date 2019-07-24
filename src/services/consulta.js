import {URL_APi} from './base';

export function consulta(){
    return fetch(`${URL_APi}/consulta`).then(resultado => resultado.json());
}