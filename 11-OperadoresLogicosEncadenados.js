const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");


let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = false;



console.log(`Verificando pasajes para ${ciudadDestino}`);

/*A && B || C */
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 &&
    edadPasajero >= 18 &&
    tienePasaporte &&
    !estaCasado) {
    console.log('El Paquete para solteros está disponible para la venta');
} else {
    console.log('La ciudad no está disponible para viajar ó el pasajero no cumple las reglas');
}