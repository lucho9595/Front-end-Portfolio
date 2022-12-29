export class Proyects {
    id?: number;
    nombre: string;
    description: string;
    img_proyect: string;

    constructor(nombre: string, description: string, img_proyect: string){
        this.nombre = nombre;
        this.description = description;
        this.img_proyect = img_proyect;
    }
}
