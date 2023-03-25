import { HabilidadComponent } from "../components/habilidad/habilidad.component";

export class HabilidadB {
    id?: Number;
    nombre: String;
    porcentaje: String;

    constructor(nombre: String, porcentaje: String) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
     }
}
