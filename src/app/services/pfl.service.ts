import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PflService {

  //http=alias, inyeccion del modulo HttpClient
  constructor(private http:HttpClient) { }

  //obtenerDatos=alias, metodo observable=devuelve datos (suscripcion asincrona)
  obtenerDatos():Observable<any> {
    // console.log("El servicio esta corriendo");
    //retorno de datos usando metodo GET de HttpClient (llama BDatos.json o URL de base datos local)
    return this.http.get('./assets/js/BDatos.json');
  }
}
