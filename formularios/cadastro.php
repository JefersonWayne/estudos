<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Verifica se os campos foram preenchidos
    if (isset($_GET["nome"]) && isset($_GET["password"])) {
        // Obtém os valores dos campos
        $nome = $_GET["nome"];
        $password = $_GET["password"];

        // Faça aqui o que desejar com os dados recebidos, como salvar em um banco de dados

        // Exemplo de exibição dos dados recebidos
        echo "Nome: " . $nome . "<br>";
        echo "Senha: " . $password . "<br>";
    } else {
        echo "Por favor, preencha todos os campos.";
    }
}
?>
