import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/persona';

  constructor(private httpC: HttpClient) { }

  public verPersonas(): Observable<Persona[]> {
    return this.httpC.get<Persona[]>(this.url + '/listar');
  }

  public crearPersona(per: Persona): Observable<any> {
    return this.httpC.post<any>(this.url + '/crear', per);
  }

  public editarPersona(per: Persona): Observable<any> {
    return this.httpC.put<any>(this.url + '/editar', per);
  }

  public borrarPersona(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url + `/eliminar/${id}`);
  }
}
