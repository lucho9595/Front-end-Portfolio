export class Proyects {
    id?: number;
    nombre: string;
    description: string;
    img: string;
    url_imagen: string;

    constructor(nombre: string, description: string, img: string, url_imagen: string){
        this.nombre = nombre;
        this.description = description;
        this.img = img;
        this.url_imagen = url_imagen;
    }
}
