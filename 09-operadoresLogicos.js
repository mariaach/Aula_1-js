/* Operadores de comparación*/

const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

/*Palabra reservada if, Evalua una condición */

console.log(`Verificando pasajes para ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log('El Pasaje está disponible para la venta');
} else {
    console.log('La ciudad no está disponible para viajar')
};

const valorPasaje = 1000;
if (valorPasaje === 1000) {
    console.log('El pasaje vale 1000');
}

/*Operadores logicos Y (AND) - O (OR) - NO (NOT) - AND = && - se deben cumplir las 2 condicines OR = || NOT = ! */

let edadPasajero = 17;
let estaAcompanado = true;


console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado)) {
    console.log('El Pasaje está disponible para la venta');
} else {
    console.log('La ciudad no está disponible para viajar ó el pasajero no cumple las reglas');
}

edadPasajero = 17;
estaAcompanado = true;

/*Aplicando lógica negativa*/

if (!(ciudadesDisponibles.indexOf(ciudadDestino) > -1 && (edadPasajero >= 18 || estaAcompanado))) {
    console.log('La ciudad no está disponible para viajar ó el pasajero no cumple las reglas');
} else {
    console.log('El Pasaje está disponible para la venta');
}