import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'http://localhost:8080/proyecto';

  constructor(private httpC: HttpClient) { }

  public verProyectos(): Observable<Proyecto[]> {
    return this.httpC.get<Proyecto[]>(this.url + '/listar');
  }

  public crearProyecto(proy: Proyecto): Observable<any> {
    return this.httpC.post<any>(this.url + '/crear', proy);
  }

  public editarProyecto(proy: Proyecto): Observable<any> {
    return this.httpC.put<any>(this.url + '/editar', proy);
  }

  public borrarProyecto(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url + `/eliminar/${id}`);
  }
}
