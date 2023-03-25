import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadB } from '../models/habilidad-b';
import { HabilidadD } from '../models/habilidad-d';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url1 = 'http://localhost:8080/habilidadD';
  url2 = 'http://localhost:8080/habilidadB';
  

  constructor(private httpC: HttpClient) { }
  
  public verHabilidadesD(): Observable<HabilidadD[]> {
    return this.httpC.get<HabilidadD[]>(this.url1 + '/listar');
  }

  public crearHabilidadD(habD: HabilidadD): Observable<any> {
    return this.httpC.post<any>(this.url1 + '/crear', habD);
  }

  public editarHabilidadD(habD: HabilidadD): Observable<any> {
    return this.httpC.put<any>(this.url1 + '/editar', habD);
  }

  public borrarHabilidadD(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url1 + `/eliminar/${id}`);
  }

  //-------------------------------------------------------------
  public verHabilidadesB(): Observable<HabilidadB[]> {
    return this.httpC.get<HabilidadB[]>(this.url2 + '/listar');
  }

  public crearHabilidadB(habB: HabilidadB): Observable<any> {
    return this.httpC.post<any>(this.url2 + '/crear', habB);
  }

  public editarHabilidadB(habB: HabilidadB): Observable<any> {
    return this.httpC.put<any>(this.url2 + '/editar', habB);
  }

  public borrarHabilidadB(id: Number): Observable<any> {
    return this.httpC.delete<any>(this.url2 + `/eliminar/${id}`);
  }
}
