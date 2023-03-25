import { EducacionComponent } from "../components/educacion/educacion.component";

export class Educacion {
    id?: Number;
    img: String;
    titulo: String;
    inicio: String;
    fin: String;
    tipo: String;
    detalle: String;
    descripcion: String;

    constructor(img: String, titulo: String, inicio: String, fin: String, tipo: String, detalle: String, descripcion: String) {
        this.img = img;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.tipo = tipo;
        this.detalle = detalle;
        this.descripcion = descripcion;
    }

}