import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mail } from "./Mail";

const mail1 = new Mail(
    "Personal",
    "mail1@personal.com"
);

const mail2 = new Mail(
    "Trabajo",
    "mail2@trabajo.com"
);

const tel1 = new Telefono(
    "Móvil",
    "616121212"
);

const tel2 = new Telefono(
    "Casa",
    "616131313"
);

const tel3 = new Telefono(
    "Trabajo",
    "616141414"
);

const direc1 = new Direccion(
    "C/ Jazmín",
    3,
    29012,
    "Almería",
    "Almería",
    5,
    "F"
);

const direc2 = new Direccion(
    "C/ de los Gatos",
    42,
    29650,
    "Mijas",
    "Málaga"
);

const direc3 = new Direccion(
    "Av. Rosales",
    26,
    25420,
    "Soportújar",
    "Granada",
    2
);

const persona1 = new Persona(
    "Marina",
    "Rosales López",
    54,
    "78245612F",
    "1969-03-12",
    "Amarillo",
    "Femenino"
);

persona1.agregarDireccion(direc1);
persona1.agregarDireccion(direc3);
persona1.agregarMail(mail1);
persona1.agregarMail(mail2);
persona1.agregarTelefono(tel1);
persona1.agregarTelefono(tel3);
persona1.agregarNota("Ir a la compra");
persona1.agregarNota("Llamar al seguro");

const persona2 = new Persona(
    "Alberto",
    "Ramírez Salmorejo",
    31,
    "84522336F",
    "1991-08-24",
    "Verde",
    "Masculino"
);

persona2.agregarDireccion(direc1);
persona2.agregarDireccion(direc2);
persona2.agregarMail(mail1);
persona2.agregarMail(mail2);
persona2.agregarTelefono(tel2);
persona2.agregarTelefono(tel3);
persona2.agregarNota("Recoger la ropa");

const persona3 = new Persona(
    "Patricia",
    "Madueña Pérez",
    70,
    "78245612F",
    "1953-01-28",
    "Aguamarina",
    "Femenino"
);

persona3.agregarDireccion(direc2);
persona3.agregarDireccion(direc3);
persona3.agregarMail(mail1);
persona3.agregarTelefono(tel1);
persona3.agregarTelefono(tel2);
persona3.agregarNota("Ir a clase de pintura");
persona3.agregarNota("Llamar al médico");
persona3.agregarNota("Recoger la ropa de la tintorería");

console.log(persona1);
console.log(persona2);
console.log(persona3);

const nuevaDireccion = new Direccion(
    "Plaza del Sol",
    21,
    22360,
    "Oviedo",
    "Asturias",
    1,
    "A"
);

const nuevoMail = new Mail(
    "Correo Basura",
    "mailnuevo@basura.com"
);

const nuevoTelefono = new Telefono(
    "Móvil 2",
    "666464646"
);

persona1.modificarRegistro("78245612F", nuevaDireccion, nuevoMail, nuevoTelefono);

console.log(persona1.direcciones);
console.log(persona1.mails);
console.log(persona1.telefonos);