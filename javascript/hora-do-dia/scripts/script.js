function update() {
    var data_atual = new Date();
    var hora_atual = data_atual.getHours();
    var saudacao = document.getElementById("saudacao");
    var hora = document.getElementById("hora-atual");
    var imagem= document.getElementById("image");
    if (hora_atual >= 0 && hora_atual < 6) {
        hora.innerHTML = "O relógio diz que são <strong>" + hora_atual + " horas</strong> da madrugada!";
        saudacao.innerHTML = "<strong>Boa madrugada!</strong> Bem-vindo ao novo dia!";
        imagem.src = "images/madrugada.jpg";
    } else if (hora_atual >= 6 && hora_atual < 12) {
        hora.innerHTML = "O relógio diz que são <strong>" + hora_atual + " horas</strong> da manhã!";
        saudacao.innerHTML = "<strong>Bom dia!</strong> Espero que seu dia seja maravilhoso!";
        imagem.src = "images/manha.jpg";
    } else if (hora_atual >= 12 && hora_atual < 18) {
        hora.innerHTML = "O relógio diz que são <strong>" + hora_atual + " horas</strong> da tarde!";
        saudacao.innerHTML = "<strong>Boa tarde!</strong> Tenha uma tarde produtiva e agradável!";
        imagem.src = "images/tarde.jpg";
    } else if (hora_atual >= 18 && hora_atual < 24) {
        hora.innerHTML = "O relógio diz que são <strong>" + hora_atual + " horas</strong> da noite!";
        saudacao.innerHTML = "<strong>Boa noite!</strong> Desejo que sua noite seja tranquila e revigorante!";
        imagem.src = "images/noite.jpg";
    }
}