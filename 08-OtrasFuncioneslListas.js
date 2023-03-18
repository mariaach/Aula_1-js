/*Definicion de una lista con tipo de dato alfanumerico */
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
console.log(ciudadesDisponibles);

/*Definicion de una lista de forma abreviada*/
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Argentina", "Brasil", "Uruguay", "Venezuela"];
console.log(paisesDisponibles);


const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${ cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${ paisesDisponibles.length} elementos`);

/*Remover el primer elemento*/
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);


/*Remover el ultimo elemento*/
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de paises tenemos ${ ciudadesDisponibles.length} elementos`);

/*Filtro de elementos de la lista */
const paisesFiltrados = paisesDisponibles.filter((e) => e == 'Brasil');
console.log(`En la lista de ciudades se encuentra ${paisesFiltrados}`);

/*Unificar los elementos en una cadena de caracteres */
console.log(paisesDisponibles.join('-'));

/*ordenar la lista*/
console.log(paisesDisponibles.sort());

/*Conociendo la posición*/
console.log(`Perú está en la posicion: ${paisesDisponibles.indexOf('Perú')}`);


/*Unificar dos listas */
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);

console.log(listaPaisesYCiudades);