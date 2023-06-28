var action = document.querySelector('button#botao');

action.addEventListener('click', onClick);


function onClick() {
    var data_atual = new Date();
    var ano_atual = data_atual.getFullYear();

    var ano_input = document.querySelector('input#dn');
    var section = document.querySelector('section#js');
    var sx_mas = document.getElementById('sx-mas');
    var sx_fem = document.getElementById('sx-fem');

    var idade = ano_atual - Number(ano_input.value);

    if (ano_atual >= Number(ano_input.value)) {
        if (idade >= 0 && idade <= 100) {
            if (sx_mas.checked) {
                section.innerHTML = `<p>Você é um <strong>homem</strong> de <strong>${idade}</strong> anos!</p>`;

                var avatar = document.createElement('img');
                section.appendChild(avatar);
                avatar.style.margin = '1rem 0';

                var div = document.createElement('div');
                section.appendChild(div);

                if (idade <= 1) {
                    avatar.src = 'images/bebe-m.png';
                    div.innerHTML = '<p>Detectamos que você é um <strong>bebê</strong>!</p>'
                } else if (idade <= 12) {
                    avatar.src = 'images/crianca-m.png';
                    div.innerHTML = '<p>Detectamos que você é um <strong>criança</strong>!</p>'
                } else if (idade <= 17) {
                    avatar.src = 'images/adolescente-m.png';
                    div.innerHTML = '<p>Detectamos que você é um <strong>adolescente</strong>!</p>'
                } else if (idade <= 30) {
                    avatar.src = 'images/jovem-adulto-m.png';
                    div.innerHTML = '<p>Detectamos que você é um <strong>jovem adulto</strong>!</p>'
                } else if (idade <= 50) {
                    avatar.src = 'images/adulto-m.png';
                    div.innerHTML = '<p>Detectamos que você é um <strong>adulto</strong>!</p>'
                }  else if (idade <= 65) {
                    avatar.src = 'images/meia-idade-m.png';
                    div.innerHTML = '<p>Detectamos que você é uma pessoa de <strong>meia idade</strong>!</p>'
                }
                else if (idade <= 80) {
                    avatar.src = 'images/idoso-m.png';
                    div.innerHTML = '<p>Detectamos que você é um <strong>idoso</strong>!</p>'
                }
                else if (idade <= 100) {
                    avatar.src = 'images/idoso-avancado-m.png';
                    div.innerHTML = '<p>Detectamos que você é um <strong>idoso avançado</strong>!</p>'
                }
            }
            if (sx_fem.checked) {
                section.innerHTML = `<p>Você é uma <strong>mulher</strong> de <strong>${idade}</strong> anos!</p>`;

                var avatar = document.createElement('img');
                section.appendChild(avatar);
                avatar.style.margin = '1rem 0';

                var div = document.createElement('div');
                section.appendChild(div);

                if (idade <= 1) {
                    avatar.src = 'images/bebe-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma <strong>bebê</strong>!</p>'
                } else if (idade <= 12) {
                    avatar.src = 'images/crianca-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma <strong>criança</strong>!</p>'
                } else if (idade <= 17) {
                    avatar.src = 'images/adolescente-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma <strong>adolescente</strong>!</p>'
                } else if (idade <= 30) {
                    avatar.src = 'images/jovem-adulto-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma <strong>jovem adulta</strong>!</p>'
                } else if (idade <= 50) {
                    avatar.src = 'images/adulto-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma <strong>adulta</strong>!</p>'
                }  else if (idade <= 65) {
                    avatar.src = 'images/meia-idade-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma pessoa de <strong>meia idade</strong>!</p>'
                }
                else if (idade <= 80) {
                    avatar.src = 'images/idoso-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma <strong>idosa</strong>!</p>'
                }
                else if (idade <= 100) {
                    avatar.src = 'images/idoso-avancado-f.png';
                    div.innerHTML = '<p>Detectamos que você é uma <strong>idosa avançada</strong>!</p>'
                }
            }
        } else {
            section.innerHTML = '<p>A idade máxima é <strong>100</strong> anos!</p>';
        }
    } else {
        section.innerHTML = '<p>O ano inserido no campo não pode ser maior que o ano atual!</p>';
    }
}
