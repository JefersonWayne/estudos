var idade = 21; 

console.log('Sua idade é de ' + idade + ' anos!')

if (idade < 16) {
    console.log('Você não pode votar de acordo com a lei.');
} else if (idade < 18 || idade > 67) {
    console.log('Seu voto é opcional de acordo com a lei.');
} else {
    console.log('Seu voto é obrigatório de acordo com a lei.')
}