export class Direccion{
    calle: string;
    numero: number;
    piso?: number;
    letra?: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;

    constructor(calle:string, numero:number, codigoPostal:number, poblacion:string, provincia:string, piso?:number, letra?:string){
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
        this.piso = piso;
        this.letra = letra;
    }
}