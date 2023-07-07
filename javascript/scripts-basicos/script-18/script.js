const pessoa = {
    Nome: "Jeferson",
    Idade: "17 Anos",
    Profissão: "Programador"
};

for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade])
}

/*
Criamos um objeto chamado "pessoa" com três propriedades: nome, idade e profissão. em seguida, utilizamos o "for...in" para percorrer cada propriedade do objeto. a cada iteração do loop, a variável "propriedade" receberá o nome da propriedade atual.
*/