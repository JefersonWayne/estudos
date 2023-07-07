// Função para calcular o IMC
function calculateBMI() {
    const unit = document.getElementById('unit').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    let bmi;

    if (unit === 'metric') {
        // Cálculo do IMC para unidades métricas
        bmi = weight / ((height / 100) ** 2);
    } else {
        // Cálculo do IMC para unidades imperiais
        bmi = (weight * 703) / (height ** 2);
    }

    let classification;
    let range;

    if (bmi < 18.5) {
        classification = 'Abaixo do peso';
        range = 'Abaixo de 18.5';
    } else if (bmi < 24.9) {
        classification = 'Peso normal';
        range = '18.5 - 24.9';
    } else if (bmi < 29.9) {
        classification = 'Sobrepeso';
        range = '25 - 29.9';
    } else {
        classification = 'Obesidade';
        range = '30 ou mais';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Seu IMC é: ${bmi.toFixed(2)}<br>
                               Classificação: ${classification}<br>
                               Faixa de peso saudável: ${range}`;
}

// Event listener para o botão de calcular
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculateBMI);
