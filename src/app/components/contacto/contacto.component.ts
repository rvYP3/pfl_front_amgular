import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
//import { PflService } from 'src/app/services/pfl.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
//instanciamos variable, trae distintos datos
// contactoS:any=[];
//   constructor(private datosCon:PflService) { }

//   ngOnInit(): void {
//     this.datosCon.obtenerDatos().subscribe(data=>{
//       this.contactoS = data.contactos;
//     })
//   }

contactoS: Contacto[]= []; // llamada a models/Contacto

constructor(private sCont:ContactoService) { }

cargarContacto(): void {
  this.sCont.verContactos().subscribe(data=> {this.contactoS = data})
}

ngOnInit(): void {
  this.cargarContacto();
}

}
