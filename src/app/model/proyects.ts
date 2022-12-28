export class Proyects {
    id?: number;
    nombre: string;
    description: string;
    img: string;

    constructor(nombre: string, description: string, img: string){
        this.nombre = nombre;
        this.description = description;
        this.img = img;
    }
}
