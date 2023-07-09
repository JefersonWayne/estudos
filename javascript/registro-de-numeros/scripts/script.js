const domReferences = {
    register: document.querySelector("#button-reg"),
    inputNumber: document.querySelector("#inputNumber"),
    select: document.querySelector("#registro"),
    main: document.querySelector("main"),
}

var selectValues = [];
let primeiro = true;

function registerNumber() {
    const value = parseInt(domReferences.inputNumber.value)
    if (isNaN(value) || value < 1 || value > 100) {
        return alert("O valor mínimo é 1, e o máximo é 100");
    } else if (selectValues.includes(value)) {
        return alert("O valor inserido já está registrado!")
    } else {
        selectValues.push(value);
        const opt = document.createElement("option");
        opt.setAttribute("value", `valor-${value}`)
        domReferences.select.appendChild(opt);
        opt.textContent = `N° ${value} registrado!`;
    }
}

function somarValores(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

function encontrarMenorMaiorValores(array) {
    array.sort();
    let menor = array[0]; // Começamos assumindo que o primeiro elemento é o menor
    let maior = array[0]; // Começamos assumindo que o primeiro elemento é o maior

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]; // Atualizamos o valor de "menor" se encontrarmos um valor menor
        }
        if (array[i] > maior) {
            maior = array[i]; // Atualizamos o valor de "maior" se encontrarmos um valor maior
        }
    }

    return { menor, maior }; // Retornamos um objeto com as propriedades "menor" e "maior"
}

function generateSummary() {
    if (selectValues.length == 0) {
        return alert("Insira pelo menos um valor no registro.")
    } else {
        if (primeiro == true) {
            for (var i = 1; i < 6; i++) {
                const p = document.createElement("p");
                p.setAttribute("id", "p-" + i);
                p.innerText = "paragrafo-" + i;
                domReferences.main.appendChild(p)
            }
            primeiro = false;
        }
        let soma = somarValores(selectValues);
        let maioremenor = encontrarMenorMaiorValores(selectValues);
        document.querySelector("p#p-1").innerHTML = `Ao todo, temos <strong>${selectValues.length}</strong> selecionados`
        document.querySelector("p#p-2").innerHTML = `O maior número informado foi <strong>${maioremenor.maior}</strong>`
        document.querySelector("p#p-3").innerHTML = `O menor número informado foi <strong>${maioremenor.menor}</strong>`
        document.querySelector("p#p-4").innerHTML = `Somando todos os valores temos o número <strong>${soma}</strong>`
        document.querySelector("p#p-5").innerHTML = `A média dos valores digitados é <strong>${Math.floor(soma / selectValues.length)}</strong>`
    }
}

domReferences.register.addEventListener('click', registerNumber);