const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudadesDisponibles = new Array(500, 400, 380, 200);
const datos = [

    {
        'ciudad': 'Bogotá',
        'precio': 500
    },
];

[

    {
        'ciudad': 'Lima',
        'precio': 400
    },
];

[

    {
        'ciudad': 'Santiago',
        'precio': 380
    },
];

[

    {
        'ciudad': 'Montevideo',
        'precio': 200
    },
];

const presupuestoDisponible = 600;

/*while... 0 ó más veces  - Do while... 1 ó más presupuestoDisponible = 500veces*/

/*
while (i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
} */
/*For...valor inicial para un valor final */

let ciudadSeleccionada = '';
for (let i = 0; i < datos.length &&
    ciudadSeleccionada == ''; i++) {

    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;

    }
}


if (ciudadSeleccionada == '') console.log("No tenemos pasajes disponibles");

else console.log("puedes comprar pasaje para: " + ciudadSeleccionada);