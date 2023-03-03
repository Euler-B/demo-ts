// Esto es un comentario de una linea

/**
 * Esto es un comentario
 * Multilinea
 */
console.log("Hola desde typescript");
console.log("Hola mundo, desde la ciudad de Merida");
console.log("Merida, ciudad de los caballeros");

// Declaracion de variables
var nombre: string = "Eduardo"; // variable de ambito global, tambien se puede anadir que en TS, no es necesario declarar el tipo de variable, pero es recomendable
let email =  "eduardo@gmail.com"; // variable de ambito local
console.log("Hola, " + nombre);
console.log("Hola", nombre, "como estas","?");
console.log(`Hola ${nombre}, como estas?`); // --> Template String, forma de concatenar strings
console.log(`El correo de ${nombre} es ${email}`);

const PI: number = 3.1416; // Constante, en TS es una variable que no puede cambiar su valor
console.log(PI);
/*Los valores de las variables no pueden cambiar, bien sea que su tipo lo asignemos o bien lo infiera el compilador.
 * para tener una variable a la que le podamos cambiar el tipo de dato, previamente debemos declararla como any, aunque hay que tener cuidado con su uso
 * Tambien podemos definir nuestros propios tipos de datos.
 */
var capital: any = "Merida";
capital = 123;

//instancia de variables sin inicializar
let a: string, b: boolean, c: number;   
a = "Hello";
b = false;
c = 193;

// BuiltIn Types: string, number, boolean, void, null y undifined


// Tipos de datos mas complejos, al igual que en JS, se pasan por referencia y no por valor 
//Lista de cadena de texto
let lista: string[] = ["one", "four", "eleven"];
//Combinacion de tipos de datos
let valores: (string | number | boolean)[] = [true, 3, "who i am"];
//Enumerados 
enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
};
let state: Estados = Estados.Incompleto;
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero",
};
let puesto: PuestoCarrera = PuestoCarrera.Tercero;

//Interfaces 
interface Tarea {
    nombre: string,
    estado: Estados,    
    urgencia: number
}; 
 //A patir de aqui puedo crear objetos que implementen la interfaz Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1.nombre}`);

// Asignación múltiple de variables

let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

// Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// ** Factor Spread (Propagación)

// En asignación de variables
let {titulo, estado, urgencia } = miTarea;

// En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

// En Objetos

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1283612783"
}

// Cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}

let edad = 4;

let estudiante = {
    nombre : "Martín",
    edad // edad: edad
}
//Types de Typescript
type Producto = {
    nombre: string,
    precio: number,
    anio: number
};

let coche: Producto = {
    nombre: "Mercedes Benz",
    precio: 154000,
    anio: 1999
};
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es antiguo` : `Coche: ${coche.nombre} es nuevo`); //<-- A esto se le denomina operacion ternaria
//If - else
if (error) {
    console.log("Hay un Error");
}else {
    console.log("No hay error");
};
//if - else if - else
if(coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es antiguo`);
} else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
};

// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no está completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente de comprobarse");
        break;
    default:
        break;
}


// ** Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
]

// For Clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}

// Foreach    
listaTareasNueva.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`);
    }
);


// Bucles While
while (tarea1.estado !== Estados.Completado) {
    if(tarea1.urgencia == 20){
        tarea1.estado = Estados.Completado;
        break;
    }else{
        tarea1.urgencia ++;
    }
}

// DO While ( se ejecuta al menos una vez)
do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
