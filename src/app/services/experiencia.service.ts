import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
url = 'http://localhost:8080/experiencia';

  constructor(private httpC:HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]> {
    return this.httpC.get<Experiencia[]>(this.url + '/listar');
  }

  public crearExperiencia(exp: Experiencia): Observable<any> {
    return this.httpC.post<any>(this.url + '/crear', exp);
  }

  public editarExperiencia(exp: Experiencia): Observable<any> {
    return this.httpC.put<any>(this.url + '/editar', exp);
  }

  public borrarExperiencia(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url + `/eliminar/${id}`);
  }

}
