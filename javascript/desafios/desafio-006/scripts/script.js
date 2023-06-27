var button_1 = document.querySelector('#button_1');

button_1.addEventListener('click', onClick)

function onClick() {
    var celsius = Number(window.prompt("Digite uma temperatura em °C (Célsius)"));

    var mensagem = document.getElementById('msg');
    var c_value_span = document.getElementById('c-value');

    mensagem.style.display = "inline";
    c_value_span.innerHTML = celsius.toLocaleString();

    var kelvin = document.getElementById('kelvin');
    var kelvin_value_span = document.getElementById('k-value');
    var kelvin_value =  celsius + 273.15;

    kelvin.style.display = "inline";
    kelvin_value_span.innerHTML = kelvin_value.toLocaleString();

    var fahrenheit = document.getElementById('fahrenheit');
    var fahrenheit_value_span = document.getElementById('f-value');
    var fahrenheit_value = (celsius*9/5)+32;

    fahrenheit.style.display = "inline";
    fahrenheit_value_span.innerHTML = fahrenheit_value.toLocaleString();
}