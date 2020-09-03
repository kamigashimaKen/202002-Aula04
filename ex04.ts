const valorInformado: number = 4;
const resultado: number = Math.round(Math.random() * 6);

const aposta: any = (): string => valorInformado === resultado ? 'Acertou' : 'Errou';

console.log(`Valor do resultado: ${resultado}`);
console.log(aposta());