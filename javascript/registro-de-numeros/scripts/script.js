const domReferences = {
    registerButton: document.querySelector("#button-reg"),
    inputNumber: document.querySelector("#inputNumber"),
    select: document.querySelector("#registro"),
    main: document.querySelector("main"),
    clearButton: document.querySelector("#button-clear"),
};

const selectValues = [];
let isFirstRegistration = true;

// Função para registrar um número
function registerNumber() {
    const value = parseInt(domReferences.inputNumber.value);

    if (isNaN(value) || value < 1) {
        return alert("Insira um número válido.");
    }

    if (selectValues.includes(value)) {
        return alert("O valor inserido já está registrado!");
    }

    selectValues.push(value);

    const option = document.createElement("option");
    option.setAttribute("value", `valor-${value}`);
    option.textContent = `N° ${value} registrado!`;
    domReferences.select.appendChild(option);
}

// Função para somar os valores
function sumValues(array) {
    return array.reduce((sum, value) => sum + value, 0);
}

// Função para encontrar o menor e o maior valor
function findSmallestAndLargestValues(array) {
    let smallest = array[0];
    let largest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    return { smallest, largest };
}

// Função para gerar o resumo
function generateSummary() {
    if (selectValues.length === 0) {
        return alert("Insira pelo menos um valor no registro.");
    }

    if (isFirstRegistration) {
        addParagraphsToDOM();
        isFirstRegistration = false;
    }

    const sum = sumValues(selectValues);
    const { smallest, largest } = findSmallestAndLargestValues(selectValues);

    updateParagraphs(sum, smallest, largest);
}

// Função para adicionar os parágrafos ao DOM
function addParagraphsToDOM() {
    for (let i = 1; i < 6; i++) {
        const paragraph = document.createElement("p");
        paragraph.setAttribute("id", `p-${i}`);
        paragraph.textContent = `paragrafo-${i}`;
        domReferences.main.appendChild(paragraph);
    }
}

// Função para atualizar os parágrafos
function updateParagraphs(sum, smallest, largest) {
    document.querySelector("p#p-1").innerHTML = `Ao todo, temos <strong>${selectValues.length}</strong> números registrados.`;
    document.querySelector("p#p-2").innerHTML = `O maior número informado foi <strong>${largest}</strong>.`;
    document.querySelector("p#p-3").innerHTML = `O menor número informado foi <strong>${smallest}</strong>.`;
    document.querySelector("p#p-4").innerHTML = `Somando todos os valores temos o número <strong>${sum}</strong>.`;
    document.querySelector("p#p-5").innerHTML = `A média dos valores digitados é <strong>${Math.floor(sum / selectValues.length)}</strong>.`;
}

// Função para remover os parágrafos do sumário do DOM
function removeParagraphsFromDOM() {
    for (let i = 1; i < 6; i++) {
        const paragraph = document.querySelector(`#p-${i}`);
        if (paragraph) {
            paragraph.remove();
        }
    }
}

// Função para limpar os valores registrados
function clearValues() {
    selectValues.length = 0;
    domReferences.select.innerHTML = "";
    isFirstRegistration = true;
    updateParagraphs(0, 0, 0);
    removeParagraphsFromDOM();
}

// Registrar função de clique para o botão de registro
domReferences.registerButton.addEventListener("click", registerNumber);

// Registrar função de clique para o botão de limpar
domReferences.clearButton.addEventListener("click", clearValues);

// limpa
