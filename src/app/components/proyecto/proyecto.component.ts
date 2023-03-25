import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
//import { PflService } from 'src/app/services/pfl.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
// proyectoS:any=[];
//   constructor(private datosProy:PflService) { }

//   ngOnInit(): void {
//     this.datosProy.obtenerDatos().subscribe(data=>{
//       this.proyectoS = data.proyectos;
//     })
//   }

proyectoS: Proyecto[]= []; // llamada a models/Proyecto

constructor(private sProy:ProyectoService) { }

cargarProyecto(): void {
  this.sProy.verProyectos().subscribe(data=> {this.proyectoS = data})
}

ngOnInit(): void {
  this.cargarProyecto();
}

}
