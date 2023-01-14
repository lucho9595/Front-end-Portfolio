export class Education {
    id? : number;
    nombreE :  string;
    descripcionE : string;
    tituloE: string;
 
    constructor(nombreE:string, descripcionE: string, tituloE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tituloE = tituloE;
    }
}