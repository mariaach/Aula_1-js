const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

/*Verificamos que el pasajero cumple las reglas */
if (edadPasajero >= 18 || estaAcompanado) {
    /*Evaluamos si la ciudad está disponible para viajar*/
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
        console.log('El Pasaje está disponible para la venta');
    } else {
        console.log('La ciudad no está disponible para viajar');
    }
} else {

    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
        console.log('El Pasaje está disponible para la venta');
    } else { console.log('El pasajero no cumple las reglas'); }

}