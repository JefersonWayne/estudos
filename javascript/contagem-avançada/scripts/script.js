// Capturando os elementos do DOM
const startInput = document.getElementById('com');
const endInput = document.getElementById('fim');
const stepInput = document.getElementById('passo');
const submitButton = document.getElementById('submit');
const main = document.querySelector('main');

// Adicionando um evento de clique ao botão de envio
submitButton.addEventListener('click', function () {
  // Obtendo os valores dos campos de entrada
  const startValue = parseInt(startInput.value);
  const endValue = parseInt(endInput.value);
  const stepValue = parseInt(stepInput.value);

  if (stepValue <= 0) {
    alert("O valor do passo não pode ser menor ou igual a 0!");
    return;
  }

  if (isNaN(startValue) || isNaN(endValue) || isNaN(stepValue)) {
    alert('Por favor, insira valores numéricos válidos!');
    return;
  }

  const resultDiv = document.getElementById("resultado");
  if (resultDiv != null) {
    resultDiv.remove();
  }

  const newResultDiv = document.createElement("div");
  newResultDiv.setAttribute("id", "resultado");
  main.appendChild(newResultDiv);

  const newValueParagraph = document.createElement("p");
  newValueParagraph.setAttribute("id", "valor");
  newResultDiv.appendChild(newValueParagraph);

  const increment = startValue <= endValue ? stepValue : -stepValue;
  for (let currentValue = startValue; startValue <= endValue ? currentValue <= endValue : currentValue >= endValue; currentValue += increment) {
    newValueParagraph.innerHTML += currentValue + " &#x1F449; ";
  }

  newValueParagraph.innerHTML += " &#x1F3C1;";
});
