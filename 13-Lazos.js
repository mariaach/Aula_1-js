const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudadesDisponibles = new Array(500, 400, 380, 200);
const presupuestoDisponible = 500;

let i = 0;

/*while... 0 ó más veces  - Do while... 1 ó más veces */


while (precioCiudadesDisponibles[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}
if (i == ciudadesDisponibles.length)
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);