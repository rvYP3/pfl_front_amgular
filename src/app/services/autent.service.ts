import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutentService {
  url="http://localhost:4280/pfl_din_angular"; //variable url:API
  currentUserSubject:BehaviorSubject<any>; //objeto observable
  
  //http=alias, inyeccion de servicio HttpClient
  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticacion esta corriendo");
    //inicializar objeto currentUserSubjet 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  IniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }

}
