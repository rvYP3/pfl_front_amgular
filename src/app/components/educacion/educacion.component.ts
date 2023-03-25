import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
//import { PflService } from 'src/app/services/pfl.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
//instanciamos variable, trae distintos datos
// educacioneS:any=[];
  // constructor(private datosEdu:PflService) { }

  // ngOnInit(): void {
  //   this.datosEdu.obtenerDatos().subscribe(data=>{
  //     this.educacioneS = data.educaciones;
  //   })
  // }

  educacioneS: Educacion[]= []; // llamada a models/Educacion

  constructor(private sEduc:EducacionService) { }

  cargarEducacion(): void {
    this.sEduc.verEducaciones().subscribe(data=> {this.educacioneS = data})
  }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  // crearEducacion(edu: Educacion): void {
  //   this.sEduc.crearEducacion(edu).subscribe(data=> {this.EducacionS = data})
  // }

  // editarEducacion(edu: Educacion): void {
  //   this.sEduc.editarEducacion(edu).subscribe(data=> {this.EducacionS = data})
  // }

  // eliminarEducacion(id: Number): void {
  //   if(id !== undefined) {
  //     this.sEduc.borrarEducacion(id).subscribe(data=> {this.EducacionS = data})}
  // }
}
