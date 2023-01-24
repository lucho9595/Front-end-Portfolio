export class Education {
    id? : number;
    nombreE :  string;
    descripcionE : string;
    tituloE: string;
    inicioE: Date;
    finE: Date;

    constructor(nombreE:string, descripcionE: string, tituloE: string, inicioE: Date, finE: Date){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tituloE = tituloE;
        this.inicioE = inicioE;
        this.finE= finE;
    }
}
