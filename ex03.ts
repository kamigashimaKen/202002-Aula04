let arr: Array<number> = [0];
let soma: number = 0;

for (let i = 0; i < 100; i++) {
    arr.push(Math.round(Math.random() * 1000));
    soma += arr[i];
}

arr.splice(0, 1); // removendo a primeira posição do array que sempre começa com 0.

soma = arr.reduce((acc, numero) => acc + numero, 0);

console.log(`Array gerado: ${arr}`);
console.log(`Média dos valores: ${soma / 100}`);
console.log(`Array somado: ${soma}`);
console.log(`Array Ordenado: ${arr.sort()}`); 