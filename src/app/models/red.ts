import { NavbarComponent } from "../components/navbar/navbar.component";

export class Red {
    id?: Number;
    icono: String;
    url: String;

    constructor(icono: String, url: String) {
        this.icono = icono;
        this.url = url;
    }
}
