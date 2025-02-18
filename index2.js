const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite su nombre: ",(entrada)=>{
    console.log("Hola "+entrada);
    rl.close();
});