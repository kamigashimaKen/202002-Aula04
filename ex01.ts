const peso: number = 70;
const altura: number = 1.80;
let imc: number = peso / (Math.pow(altura, 2));

imc = parseFloat(imc.toFixed(2));

const verificaIMC: any = () => {
    if (imc < 18.5)
        console.log("\nSeu IMC é: " + imc + " - Abaixo do Peso");

    else if ((imc >= 18.5) && (imc <= 24.9))
        console.log("\nSeu IMC é: " + imc + " - Peso Ideal");

    else if ((imc >= 25) && (imc <= 29.9))
        console.log("\nSeu IMC é: " + imc + " - Acima do Peso");

    else if ((imc >= 30) && (imc <= 34.9))
        console.log("\nSeu IMC é: " + imc + " - Obesidade Grau 1");

    else if ((imc >= 35) && (imc <= 40))
        console.log("\nSeu IMC é: " + imc + " - Obesidade Grau 2");

    else
        console.log("\nSeu IMC é: " + imc + " - Obesidade Grau 3");

}
