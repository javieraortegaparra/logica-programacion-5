const prompt = require("prompt-sync") 

//generar el numero aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() *100) +1;
let intentos = 0;
let adivinado = false;

while(!adivinado ){
    let entrada = prompt("adivina un numero entre el 1 y el 100")
    let numero = parseInt(entrada);

    //verificar si es un numero valido
    if(isNaN(numero)){
        alert("por favor, ingresa un numero valido");
        continue;
    }
}

//agregar el intento a la lista de intentos
intentos.push(numero);

//verificar si es correcto
if(numero === numeroSecreto){
    console.log(`felicitaciones, adivinaste el numero secreto en ${intentos.length} intentos`);
    adivinado = true;
}else{
    console.log("ups, el numero secreto es incorrecto");
}