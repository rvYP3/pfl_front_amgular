import { HabilidadComponent } from "../components/habilidad/habilidad.component";

export class HabilidadD {
    id?: Number;
    nombre: String;
    porcentaje: String;

    constructor(nombre: String, porcentaje: String) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
     }
}
