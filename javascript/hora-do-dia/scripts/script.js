function update() {
    var data_atual = new Date();
    var hora_atual = data_atual.getHours();
    var saudacao = document.getElementById("saudacao");
    var hora = document.getElementById("hora-atual");
    var imagem= document.getElementById("image");

    hora_atual = 1;

    if (hora_atual >= 0 && hora_atual < 6) {
        hora.textContent = `O relógio diz que são ${hora_atual} hora(s) da madrugada!`;
        saudacao.textContent = "Boa madrugada! Bem-vindo ao novo dia!";
        imagem.src = "images/madrugada.jpg";
    } else if (hora_atual >= 6 && hora_atual < 12) {
        hora.textContent = `O relógio diz que são ${hora_atual} horas da manhã!`;
        saudacao.textContent = "Bom dia! Espero que seu dia seja maravilhoso!";
        imagem.src = "images/manha.jpg";
    } else if (hora_atual >= 12 && hora_atual < 18) {
        hora.textContent = `O relógio diz que são ${hora_atual} horas da tarde!`;
        saudacao.textContent = "Boa tarde! Tenha uma tarde produtiva e agradável!";
        imagem.src = "images/tarde.jpg";
    } else if (hora_atual >= 18 && hora_atual < 24) {
        hora.textContent = `O relógio diz que são ${hora_atual} horas da noite!`;
        saudacao.textContent = "Boa noite! Desejo que sua noite seja tranquila e revigorante!";
        imagem.src = "images/noite.jpg";
    }
}