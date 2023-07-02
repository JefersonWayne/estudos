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

    if (passoValue <= 0) {
        alert("Valor do passo não pode ser menor que 0!");
        passoValue = 1;
        return;
    } else if (isNaN(comValue) || isNaN(fimValue) || isNaN(passoValue)) {
        alert('Por favor, insira valores numéricos válidos!');
        return; 
    }
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


    if (comValue <= fimValue) {
        for (var currentCount = comValue; currentCount <= fimValue; currentCount += passoValue) {
            newP.innerHTML += currentCount + " &#x1F449; ";
        }
    } else {
        for (var currentCount = comValue; currentCount >= fimValue; currentCount -= passoValue) {
            newP.innerHTML += currentCount + " &#x1F449; ";
        }
    }
    
    newP.innerHTML += " &#x1F3C1;";
});


// This code was written by Flávio Jeferson in collaboration with the AI Chat GPT.