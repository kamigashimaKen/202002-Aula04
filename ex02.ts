let somaPares: number = 0;
let somaImpares: number = 0;

const somarPareImpar: any = () => {

    for (let i: number = 2; i <= 1000; i += 2) {
        somaPares = somaPares + i;
    }

    for (let i: number = 1; i < 1000; i += 2) {
        somaImpares = somaImpares + i;
    }
};

somarPareImpar();

console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Soma dos números ímpares: ${somaImpares}`);