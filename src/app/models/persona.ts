import { InfoComponent } from "../components/info/info.component";

export class Persona {
    id?: Number;
    nombre: String;
    apellido: String;
    titulo: String;
    sobreMi: String;
    foto: String;
    tituloFoto: String;
    banner: String;
    tituloBanner: String;

    constructor(nombre: String, apellido: String, titulo: String, sobreMi: String, foto: String, tituloFoto: String, banner: String, tituloBanner: String) {
        this.nombre = nombre;
        this.apellido =apellido;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
        this.foto = foto;
        this.tituloFoto = tituloFoto;
        this.banner = banner;
        this.tituloBanner = tituloBanner;
    }

}
