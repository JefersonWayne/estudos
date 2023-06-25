var data = new Date();
var dia = data.getDay();

var msg = 'Hoje é ';
var dom = 'Domingo'
var seg = 'Segunda-feira';
var ter = 'Terça-feira';
var qua = 'Quarta-feira';
var qui = 'Quinta-feira';
var sex = 'Sexta';
var sab = 'Sábado';

switch(dia) {
    case 0:
        console.log(msg + dom.toLowerCase());
    break
    case 1:
        console.log(msg + seg.toLowerCase());
    break
    case 2:
        console.log(msg + ter.toLowerCase());
    break
    case 3:
        console.log(msg + qua.toLowerCase());
    break
    case 4:
        console.log(msg + qui.toLowerCase());
    break
    case 5:
        console.log(msg + sex.toLowerCase());
    break
    case 6:
        console.log(msg + sab.toLowerCase());
    break
}

