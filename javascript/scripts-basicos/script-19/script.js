function ParOuImpar(numero) {
    return numero % 2 == 0 ? "Par" : "Impar";
}

function Somar(numero1, numero2) {
    return numero1 + numero2;
}

console.log(ParOuImpar(Somar(1, 101)))