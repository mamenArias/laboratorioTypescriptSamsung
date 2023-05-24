import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleaños: Date;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: string[];

    constructor(nombre:string, apellidos:string, edad:number, dni:string, cumpleaños:Date, colorFavorito:string, sexo:string, direcciones:Direccion[], mails:Mail[], telefonos:Telefono[], notas:string[]){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }

    
}