"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo) {
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
    Persona.prototype.agregarDireccion = function (direc) {
        this.direcciones.push(direc);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.agregarTelefono = function (tlf) {
        this.telefonos.push(tlf);
    };
    Persona.prototype.agregarNota = function (nota) {
        this.notas.push(nota);
    };
    Persona.prototype.modificarRegistro = function (dni, nuevaDireccion, nuevoMail, nuevoTelefono) {
        if (this.dni == dni) {
            this.agregarDireccion(nuevaDireccion);
            this.agregarMail(nuevoMail);
            this.agregarTelefono(nuevoTelefono);
        }
    };
    return Persona;
}());
exports.Persona = Persona;
