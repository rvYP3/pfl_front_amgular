import { ExperienciaComponent } from "../components/experiencia/experiencia.component";

export class Experiencia {
   id?: Number;
   img: String;
   titulo: String;
   inicio: String;
   fin: String;
   puesto: String;
   tarea: String;

   constructor(img: String, titulo: String, inicio: String, fin: String, puesto: String, tarea: String) {
        this.img = img;    
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.puesto = puesto;
        this.tarea = tarea;
   }
}
