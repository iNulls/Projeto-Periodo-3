<?php
			    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			        $usuario = $_POST['usuario'];
			        $senha = $_POST['senha'];

			        // Conexão com o banco de dados
			   		include_once("config.php");

			        // Verifica se ocorreu algum erro na conexão
			        if ($conn->connect_error) {
			            die('Erro na conexão: ' . $conn->connect_error);
			        }

			        // Consulta o banco de dados para verificar o login
			        $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND senha = '$senha'";
			        $result = $conn->query($sql);

			        if ($result->num_rows > 0) {
			            echo "Login realizado com sucesso!";
			        } else {
			            echo "Login falhou. Verifique seu email e senha.";
			        }

			        // Fecha a conexão com o banco de dados
			        $conn->close();
			    	}
                    
?>