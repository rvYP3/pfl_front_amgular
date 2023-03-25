import { ProyectoComponent } from "../components/proyecto/proyecto.component";

export class Proyecto {
    id?: Number;
    img: String;
    titulo: String;
    inicio: String;
    fin: String;
    tipo: String;
    detalle: String;

    constructor(img: String, titulo: String, inicio: String, fin: String, tipo: String, detalle: String) {
        this.img = img;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.tipo = tipo;
        this.detalle = detalle;
    }
}
