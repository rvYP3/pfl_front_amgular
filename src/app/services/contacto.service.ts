import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url = 'http://localhost:8080/contacto';

  constructor(private httpC: HttpClient) { }

  public verContactos(): Observable<Contacto[]> {
    return this.httpC.get<Contacto[]>(this.url + '/listar');
  }

  public crearContacto(con: Contacto): Observable<any> {
    return this.httpC.post<any>(this.url + '/crear', con);
  }

  public editarContacto(con: Contacto): Observable<any> {
    return this.httpC.put<any>(this.url + '/editar', con);
  }

  public borrarContacto(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url + `/eliminar/${id}`);
  }
}
