// Capturando os elementos do DOM
var comInput = document.getElementById('com');
var fimInput = document.getElementById('fim');
var passoInput = document.getElementById('passo');
var submitButton = document.getElementById('submit');
var main = document.querySelector('main');


// Adicionando um evento de clique ao botão de envio
submitButton.addEventListener('click', function() {
  // Obtendo os valores dos campos de entrada
    var comValue = parseInt(comInput.value);
    var fimValue = parseInt(fimInput.value);
    var passoValue = parseInt(passoInput.value);

    if (comValue >= fimValue || passoValue <= 0 || passoValue >= fimValue) {
        alert("Oops! Valores inválidos. Certifique-se de que o número de início seja menor que o número de término e que o passo seja um valor positivo e que seja menor que o fim.");
        return;
    } else if (isNaN(comValue) || isNaN(fimValue) || isNaN(passoValue)) {
        alert('Por favor, insira valores numéricos válidos!');
        return; // Encerra a função se algum valor for inválido
    } else {
        var divResultado = document.getElementById("resultado");
        if (divResultado != null) {
        divResultado.remove();
        }
        var newResultado = document.createElement("div");
        newResultado.setAttribute("id", "resultado");
        main.appendChild(newResultado)

        var newP = document.createElement("p");
        newP.setAttribute("id", "valor");
        newResultado.appendChild(newP)

        var currentCount = comValue; // Inicializa a contagem com o valor de início

        while (currentCount <= fimValue) {
        newP.innerHTML += currentCount + " &#x1F449; ";
        currentCount += passoValue; // Incrementa a contagem pelo valor do passo
        }
        newP.innerHTML += " &#x1F3C1;";

    }
});


// This code was written by Flávio Jeferson in collaboration with the AI Chat GPT.