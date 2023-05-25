import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleanos: string;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: string[];

    constructor(nombre:string, apellidos:string, edad:number, dni:string, cumpleanos:string, colorFavorito:string, sexo:string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.notas = [];
    }

    agregarDireccion(direc:Direccion){
        this.direcciones.push(direc);
    }

    agregarMail(mail:Mail){
        this.mails.push(mail);
    }

    agregarTelefono(tlf:Telefono){
        this.telefonos.push(tlf);
    }

    agregarNota(nota:string){
        this.notas.push(nota);
    }

    modificarRegistro(dni:string, nuevaDireccion:Direccion, nuevoMail:Mail, nuevoTelefono:Telefono){
        if (this.dni == dni){
            this.agregarDireccion(nuevaDireccion);
            this.agregarMail(nuevoMail);
            this.agregarTelefono(nuevoTelefono);
        }
    }
}