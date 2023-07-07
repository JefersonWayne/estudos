const Array = ["Oi", "Isso", "É", "Um", "Array"]

for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}

console.log("")

const numeros = [6, 5, 4, 3]
numeros[4] = 2;
numeros.push(1);
numeros.sort()

console.log(numeros);
console.log(`O array acima possui ${numeros.length} elementos`);
console.log(`O primeiro valor do array é ${numeros[0]}`);