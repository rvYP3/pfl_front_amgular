import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
// import { PflService } from 'src/app/services/pfl.service'; //cuando importamos del JSON

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
//instanciamos variable, trae distintos datos
// experienciaS:any=[];
  // constructor(private datosExp:PflService) { }

  // ngOnInit(): void {
  //   this.datosExp.obtenerDatos().subscribe(data=>{
  //     this.experienciaS = data.experiencias;
  //   })
  // }

  experienciaS: Experiencia[]= []; // llamada a models/experiencia

  constructor(private sExpe:ExperienciaService) { }

  cargarExperiencia(): void {
    this.sExpe.verExperiencias().subscribe(data=> {this.experienciaS = data})
  }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  // crearExperiencia(exp: Experiencia): void {
  //   this.sExpe.crearExperiencia(exp).subscribe(data=> {this.experienciaS = data})
  // }

  // editarExperiencia(exp: Experiencia): void {
  //   this.sExpe.editarExperiencia(exp).subscribe(data=> {this.experienciaS = data})
  // }

  // eliminarExperiencia(id: Number): void {
  //   if(id !== undefined) {
  //     this.sExpe.borrarExperiencia(id).subscribe(data=> {this.experienciaS = data})}
  // }
    
}
