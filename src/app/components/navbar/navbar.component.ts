import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/models/red';
import { RedService } from 'src/app/services/red.service';
//import { PflService } from 'src/app/services/pfl.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//instanciamos variable, trae distintos datos
// redeS:any=[];
//   constructor(private datosGen:PflService, private datosRed:PflService) { }

//   ngOnInit(): void {
//     //data=alias de la suscripcion
//     this.datosRed.obtenerDatos().subscribe(data=>{
//       this.redeS = data.redes;
//     })
//   }

redeS: Red[]= []; // llamada a models/Red

constructor(private sRed:RedService) { }

cargarRed(): void {
  this.sRed.verRedes().subscribe(data=> {this.redeS = data})
}

ngOnInit(): void {
  this.cargarRed();
}

}
