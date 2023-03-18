/*palabra const espacio de memoria que luego de asignar su  valor no ambia en el tiempo */
const valorPasaje = 1650;
console.log(valorPasaje);
const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";


console.log(nombrePasajero);
console.log(apellidoPasajero);

/*Palabra let espacio de memoria que pueda cambiar durante la ejecucion de un programa*/

let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);


/*Palabra var Palabra let espacio de memoria que pueda cambiar durante la ejecucion de un programa  El alcance*/
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;


/*Bloque Palabra let espacio de memoria que pueda cambiar durante la ejecucion de un programa*/
{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " + nombreCompletoPasajero);
    console.log("Variable con var: " + nombreCompletoDelPasajero);
}
console.log("Variable con let: " + nombreCompletoPasajero);
console.log("Variable con var: " + nombreCompletoDelPasajero);