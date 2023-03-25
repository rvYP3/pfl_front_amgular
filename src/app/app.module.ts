import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { MLoginComponent } from './modals/m-login/m-login.component';
import { MLogoutComponent } from './modals/m-logout/m-logout.component';
import { MRedesComponent } from './modals/m-redes/m-redes.component';
import { MBannerComponent } from './modals/m-banner/m-banner.component';
import { MInfoComponent } from './modals/m-info/m-info.component';
import { MExperienciaComponent } from './modals/m-experiencia/m-experiencia.component';
import { MEducacionComponent } from './modals/m-educacion/m-educacion.component';
import { MHabDuraComponent } from './modals/m-hab-dura/m-hab-dura.component';
import { MHabBlandaComponent } from './modals/m-hab-blanda/m-hab-blanda.component';
import { MProyectoComponent } from './modals/m-proyecto/m-proyecto.component';
import { MContactoComponent } from './modals/m-contacto/m-contacto.component';
import { MPrintComponent } from './modals/m-print/m-print.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadComponent,
    ProyectoComponent,
    ContactoComponent,
    FooterComponent,
    MLoginComponent,
    MLogoutComponent,
    MRedesComponent,
    MBannerComponent,
    MInfoComponent,
    MExperienciaComponent,
    MEducacionComponent,
    MHabDuraComponent,
    MHabBlandaComponent,
    MProyectoComponent,
    MContactoComponent,
    MPrintComponent,
    InicioComponent,
    Error404Component,
    LoginComponent,
    LogoutComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
