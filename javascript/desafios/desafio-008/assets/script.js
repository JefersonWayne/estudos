function calcDiscount() {

    const value = Number(document.querySelector("input#productValue").value);
    const discount = Number(document.querySelector("input#discountValue").value);
    const calc = (discount / 100) * value;

    if (document.querySelector("input#productValue").length = 0 || value <= 0 || discount <= 0 || discount > 100) {
        alert("Erro ao fazer o calculo, revise seus dados!")
        return;
    }

    const createElement = (tag, id, tagParent) => {
        const element = document.createElement(tag);
        element.setAttribute("id", id);
        tagParent.appendChild(element);
    }

    createElement("div", "divResult", document.body);
    createElement("p", "resultDiscount", document.querySelector("div#divResult"));
    document.querySelector("p#resultDiscount").innerHTML = `O desconto calculado foi ${calc.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}!<br>O preço do produto é ${(value - calc).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}!`;
}