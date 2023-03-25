import { Component, OnInit } from '@angular/core';
import { HabilidadB } from 'src/app/models/habilidad-b';
import { HabilidadD } from 'src/app/models/habilidad-d';
import { HabilidadService} from 'src/app/services/habilidad.service';
//import { PflService } from 'src/app/services/pfl.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
//instanciamos variable, trae distintos datos
// habilidadesDuraS:any=[];
// habilidadesBlandaS:any=[];
//   constructor(private datosHab:PflService) { }

//   ngOnInit(): void {
//     this.datosHab.obtenerDatos().subscribe(data=>{
//       this.habilidadesDuraS = data.habilidadesDuras;
//       this.habilidadesBlandaS = data.habilidadesBlandas;
//     })
//   }

habilidadesDuraS: HabilidadD[]= []; // llamada a models/HabilidadD
habilidadesBlandaS: HabilidadB[]= []; // llamada a models/HabilidadB

constructor(private sHab:HabilidadService) { }

cargarHabilidadD(): void {
  this.sHab.verHabilidadesD().subscribe(data=> {this.habilidadesDuraS = data});
  this.sHab.verHabilidadesB().subscribe(data=> {this.habilidadesBlandaS = data})
}

ngOnInit(): void {
  this.cargarHabilidadD();
}


}
