//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.//
//Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa//

const nome = "Eduardo";
const peso = 98;
const altura = 1.75;

//Calculo do IMC// s

const imc = peso / (altura * altura);

console.log(imc)


//validacao simples
if (imc > 30) {
    console.log(`${nome} você está acima do peso`)
} else if (imc < 30) {
    console.log(`${nome} você está no peso`)
}


//validação composta 
if (imc <= 30) {
    if (imc > 30) {
        console.log(`${nome}, seu iMC está ideal para seu peso e altura! Parabéns!`)
    } else {
        console.log(`${nome}, seu iMC esta muito baixo, procure um Médico`)
        // Condição 1 passou, porém condição 2 não passou
    }
} else {
   
    console.log(`${nome} seu IMC está muito Alto, procure um Médico!`)
}
