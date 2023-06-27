var button = document.getElementById("botao")

button.addEventListener('click', onClick);

function onClick() {
    var contacao = Number(window.prompt("Olá, qual a cotação atual do dolar?"))
    var real = Number(window.prompt("Qual valor em R$ (real) você tem na carteira?"));
    var convertido = real / contacao; 
    
    window.alert(`Aqui está a sua carteira:\nReal: ${real.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}\nDólar: ${convertido.toLocaleString('en', {style: 'currency', currency: 'USD'})}`)
}