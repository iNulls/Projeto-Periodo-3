<?php

include_once("config.php");
 
$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$dataNascimento = $_POST['dataNascimento'];
$genero = $_POST['genero'];
$nomeMaterno = $_POST['nomeMaterno'];
$email = $_POST['email'];
$celular = $_POST['celular'];
$fixo = $_POST['fixo'];
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
$CEP = $_POST['CEP'];
$endereco = $_POST['endereco'];
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$uf = $_POST['uf'];
$numero = $_POST['numero'];
$complemento = $_POST['complemento'];

$sql = "INSERT INTO usuarios (nome, CPF, dataNascimento, sexo, nomeMaterno, email, celular, telefone, usuario, senha)
        VALUES ('$nome', '$cpf', '$dataNascimento', '$genero', '$nomeMaterno', '$email', '$celular', '$fixo', '$usuario', '$senha')";

$salvar = mysqli_query($conn, $sql);

$sql = "INSERT INTO endereco (CEP, logradouro, numero, complemento, bairro, cidade, estado) 
        VALUES ('$CEP', '$endereco', '$numero', '$complemento', '$bairro', '$cidade', '$uf')";

$salvar = mysqli_query($conn, $sql);

$linhas = mysqli_affected_rows($conn);

mysqli_close($conn);

?>

