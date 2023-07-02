var button = document.querySelector("button#submit");

button.addEventListener('click', function() {
    var main = document.querySelector('main');
    var valorBase = Number(document.querySelector("input#base").value);

    if (valorBase === "") {
        window.alert("Insira um número dentro da caixa de entrada!");
        return;
    } else {
        var divResultado = document.getElementById("resultado");
        if (divResultado != null) {
            divResultado.remove();
        }
        var newResultado = document.createElement("div");
        newResultado.setAttribute("id", "resultado");
        main.appendChild(newResultado);

        for(var i = 1; i <= 10; i++) {
            var multiplicacaoValor = valorBase * i;
            var newP = document.createElement("p");
            newP.innerHTML = valorBase + " x " + i + " = " + multiplicacaoValor;
            newResultado.appendChild(newP);
        }
    }
});
