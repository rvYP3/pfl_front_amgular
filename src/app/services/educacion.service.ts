import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = 'http://localhost:8080/educacion';

  constructor(private httpC: HttpClient) { }

  public verEducaciones(): Observable<Educacion[]> {
    return this.httpC.get<Educacion[]>(this.url + '/listar');
  }

  public crearEducacion(edu: Educacion): Observable<any> {
    return this.httpC.post<any>(this.url + '/crear', edu);
  }

  public editarEducacion(edu: Educacion): Observable<any> {
    return this.httpC.put<any>(this.url + '/editar', edu);
  }

  public borrarEducacion(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url + `/eliminar/${id}`);
  }
}
