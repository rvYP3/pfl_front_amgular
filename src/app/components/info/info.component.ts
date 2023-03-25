import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
//import { PflService } from 'src/app/services/pfl.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
infO:any;
nombre:String='';
apellido:String='';
titulo:String='';
sobreMi:String='';
foto:String='';
tituloFoto:String='';
banner:String='';
tituloBanner:String='';

  // constructor(private datosInfo:PflService) { }

  // ngOnInit(): void {
  //   this.datosInfo.obtenerDatos().subscribe(data=>{
  //     this.infO = data.info;
  //     this.nombre = data.nombre;
  //     this.apellido = data.apellido;
  //     this.titulo = data.titulo;
  //     this.sobreMi = data.sobreMi;
  //     this.foto = data.foto;
  //     this.tituloFoto = data.tituloFoto;
  //     this.banner = data.banner;
  //     this.tituloBanner = data.tituloBanner;
  //   })    
  // }

  personaS: Persona[]= []; // llamada a models/Persona

  constructor(private sPers: PersonaService) { }

  cargarPersona(): void {
    this.sPers.verPersonas().subscribe(data=>{this.personaS = data;})
  }

  ngOnInit(): void {
    this.cargarPersona();
  }
}
