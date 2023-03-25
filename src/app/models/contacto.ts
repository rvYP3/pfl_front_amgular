export class Contacto {
    id?: Number;
    ciudad: String;
    provincia: String;
    telefono: String;
    correo: String;

    constructor(ciudad: String, provincia: String, telefono: String, correo: String) {
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.telefono = telefono;
        this.correo = correo;
    }
}
