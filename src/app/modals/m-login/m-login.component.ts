import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-m-login',
  templateUrl: './m-login.component.html',
  styleUrls: ['./m-login.component.css']
})

export class MLoginComponent implements OnInit {
form: FormGroup;
  //inyectar el servicio formBuilder en el constructor 
  constructor(private formBuilder:FormBuilder) { 
    //inicializamos el formulario
    this.form= this.formBuilder.group({
      //creamos el grupo de controles para el formulario login
      email: ['', [Validators.required, Validators.email]],   
      password: ['', [Validators.required, Validators.minLength(8)]],
      // deviceInfo:this.formBuilder.group({
      //   deviceId:[17867868768],
      //   deviceType:["DEVICE_TYPE_ANDROID"],
      //   notificationToken:["67657575eececc3d"]
      // })
    })
  }

ngOnInit() { }
//metodos
get Mail() {
  return this.form.get('email');
}//getter email

get Password() {
  return this.form.get('password');
}//getter password

get MailNoValid() {
  return this.Mail?.touched && !this.Mail?.valid
}//validacion email

get PasswordNoValid() {
  return this.Password?.touched && !this.Password?.valid
}//validacion password

onEnviar (event: Event) {
  //detenemos la propagacion o ejecucion del comportamiento Submit del formulario
  event.preventDefault;
    if (this.form.valid) {
    //llamamos a nuestro servicio para enviar los datos al servidor
        alert("OK, Enviar Formulario!");
    }else {
    //corremos todas las validaciones para que se ejecuten los mensajes de error en el template
        this.form.markAllAsTouched();
        alert("ERROR, No Enviar Formulario!");
    }
  }
}
