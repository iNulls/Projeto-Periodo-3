<?php

$host = "localhost";
$user = "root";
$pass= "";
$dbname = "telecall";

$conn = new mysqli($host,$user,$pass,$dbname);

if($conn->connect_errno){
    echo "erro";
}   else {
    //echo "Conexão Efetuada com sucesso";
}

?>