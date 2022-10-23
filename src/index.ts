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
let lista: string[] = ["one", "four", "eleven"];
let valores: (string | number | boolean)[] = [true, 3, "who i am"]