export class Experiencie {
    id? : number;
    nombreE :  string;
    descripcionE : string;
    inicioE: Date;
    finE: Date;

    constructor(nombreE:string, descripcionE: string, inicioE: Date, finE: Date){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.inicioE = inicioE;
        this.finE= finE;
    }
}
