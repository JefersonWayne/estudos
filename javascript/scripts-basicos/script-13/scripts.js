var data = new Date();
var horas = data.getHours()

if (horas <= 6) {
    console.log(`Agora são exatamente ${horas} horas da madrugada`);
    console.log('Boa madrugada!');
} else if (horas <= 12) {
    console.log(`Agora são exatamente ${horas} horas da manhã`);
    console.log('Bom dia!');
} else if (horas <= 18) {
    console.log(`Agora são exatamente ${horas} horas da tarde`);
    console.log('Boa tarde!');
} else {
    console.log(`Agora são exatamente ${horas} horas da noite`);
    console.log('Boa noite!');
}