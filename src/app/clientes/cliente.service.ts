import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './cliente.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ClienteService {
  constructor() {}

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES); // sec crea el flujo observable a partir de los objetos CLIENTES.
  }
}
