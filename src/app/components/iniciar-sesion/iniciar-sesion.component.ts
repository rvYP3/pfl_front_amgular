import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentService } from 'src/app/services/autent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
form:FormGroup;//crear el formulario
//inyectar el servicio FormBuilder en el constructor 
  constructor(private formB:FormBuilder, private autService:AutentService, private ruta:Router) { 
    //inicializar el formulario
    this.form = this.formB.group({
    //creamos el grupo de controles para el formulario
        email: ['', [Validators.required, Validators.email]],   
        password: ['', [Validators.required, Validators.minLength(8)]],
        // deviceInfo:this.formB.group({
        //   deviceId:[17867868768],
        //   deviceType:["DEVICE_TYPE_ANDROID"],
        //   notificationToken:["67657575eececc3d"]
        // })
    })
  }
  
  ngOnInit(): void {
  }

  //metodos
  get Mail() {
    return this.form.get('email');
  }//getter email

  get Password() {
    return this.form.get('password');
  }//getter password

  onEnviar(event: Event) {
    //detenemos la propagacion o ejecucion del comportamiento Submit del formulario
    event.preventDefault;
    this.autService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }
}
