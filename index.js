/*function saludo() {
    nombre = prompt("¿Como te llamas: ?");

    console.log("Hola " + nombre);
}

function promedio(){
    let num1 = parseFloat(prompt("Ingresa el primero número: "));
    let num2 = parseFloat(prompt("Ingresa el segundo numero: "));
    let num3 = parseFloat(prompt("Ingresa el tercer número: "));

    let prom = (num1 + num2 + num3)/3;

    console.log(prom);
}

function km_x_litro(){

    let lt = parseFloat(prompt("Ingresa el numero de litros: "));
    let km = parseFloat(prompt("Ingresa el numero de kilometros: "));

    let consumo = lt / km;

    console.log("Has consumido: "+consumo+" lt/km");
}*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let personas = [];

function comensal() {
    rl.question("Ingrese el número de comensales: ", (input) => {
        let invitado = parseInt(input, 10);

        if (isNaN(invitado) || invitado <= 0) {
            console.log("Por favor, ingrese un número válido de comensales.");
            rl.close();
            return;
        }

        // Cantidades base por kilo de patatas
        let papasPorPersona = 200;  // gramos de patatas por persona
        let huevosPorKiloPapas = 5; // huevos por kilo de patatas
        let cebollaPorKiloPapas = 300; // gramos de cebolla por kilo de patatas

        // Cálculo de ingredientes
        let totalPapas = papasPorPersona * invitado; // en gramos
        let totalHuevos = ((totalPapas + 999) / 1000) * huevosPorKiloPapas; // Redondeo sin Math.ceil()
        let totalCebolla = (totalPapas / 1000) * cebollaPorKiloPapas;

        let persona = {
            comensales: invitado,
            cantidad_papas: totalPapas,
            cantidad_huevos: totalHuevos | 0, // Conversión a entero
            cantidad_cebollas: totalCebolla.toFixed(2)
        };

        personas.push(persona);

        console.log("\nIngredientes necesarios para la tortilla:");
        console.log(persona);
        console.log("\nLista de registros:", personas);

        rl.close();
    });
}

// Ejecutar la función
comensal();
