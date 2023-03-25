import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../models/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  url = 'http://localhost:8080/red';

  constructor(private httpC: HttpClient) { }

  public verRedes(): Observable<Red[]> {
    return this.httpC.get<Red[]>(this.url + '/listar');
  }

  public crearRed(red: Red): Observable<any> {
    return this.httpC.post<any>(this.url + '/crear', red);
  }

  public editarRed(red: Red): Observable<any> {
    return this.httpC.put<any>(this.url + '/editar', red);
  }

  public borrarRed(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url + `/eliminar/${id}`);
  }
}
