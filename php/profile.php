<?php
session_start();

// Verificar se o usuário está logado
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: ../login.html');
    exit();
}

// Atualizar as informações do usuário
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['save'])) {
        // Obter os dados do formulário
        $newUserData = [
            'nome' => $_POST['nome'],
            'dataNascimento' => $_POST['dataNascimento'],
            'genero' => $_POST['genero'],
            'nomeMaterno' => $_POST['nomeMaterno'],
            'cpf' => $_POST['cpf'],
            'telefoneFixo' => $_POST['telefoneFixo'],
            'celular' => $_POST['celular'],
            'CEP' => $_POST['CEP'],
            'endereco' => $_POST['endereco'],
            'bairro' => $_POST['bairro'],
            'cidade' => $_POST['cidade'],
            'uf' => $_POST['uf'],
            'numero' => $_POST['numero'],
            'complemento' => $_POST['complemento'],
            'email' => $_POST['email'],
            'usuario' => $_POST['usuario'],
            'senha' => $_POST['senha'],
        ];

        // Atualizar os dados da sessão (substitua isso pela lógica de atualização do banco de dados)
        $_SESSION['username'] = $newUserData['usuario'];

        // Redirecionar para a página de perfil com uma mensagem de sucesso
        $_SESSION['message'] = 'Informações atualizadas com sucesso!';
        header('Location: index.html');
        exit();
    } elseif (isset($_POST['cancel'])) {
        header('Location: index.html');
        exit();
    } elseif (isset($_POST['reset'])) {
        $newUserData = $currentUserData;
    }
}

$message = isset($_SESSION['message']) ? $_SESSION['message'] : '';
unset($_SESSION['message']);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Perfil</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="conteudo-cliente">
        <div class="container">
            <section class='header'>
                <h2>Editar Perfil</h2>
            </section>
            <?php if ($message): ?>
                <p><?php echo htmlspecialchars($message); ?></p>
            <?php endif; ?>
            <form id="form" class="form" method="post" action="profile.php">
                <!--DARKMODE-->
                <div>
                    <input type="checkbox" class="checkbox" id="chk" />
                    <label class="labeldark" for="chk">
                        <i class="bi bi-brightness-low-fill"></i>
                        <i class="bi bi-moon-fill"></i>
                        <div class="ball"></div>
                    </label>
                </div>
                <br>
                <!--FIMDARKMODE-->
                <div class="row">
                    <!--Nome-->
                    <div class="form-content">
                        <label id="labelNome" for="nome"> Nome Completo:</label>
                        <input type="text" id="nome" name="nome" value="<?php echo htmlspecialchars($currentUserData['nome']); ?>" placeholder="Digite o nome completo" required>
                    </div>

                    <!--Nascimento-->
                    <div class="form-content">
                        <label id="labelDataNasc" for="dataNascimento"> Data de nascimento:</label>
                        <input type="date" id="dataNascimento" name="dataNascimento" value="<?php echo htmlspecialchars($currentUserData['dataNascimento']); ?>" placeholder="Digite a data de nascimento (dd/mm/aaaa)" required>      
                    </div>

                    <!--Sexo-->
                    <div class="form-content">
                        <label for="genero"> Gênero:</label>
                        <select name="genero" id="genero" required>
                            <option value="masc" <?php echo $currentUserData['genero'] == 'masc' ? 'selected' : ''; ?>>Masculino</option>
                            <option value="fem" <?php echo $currentUserData['genero'] == 'fem' ? 'selected' : ''; ?>>Feminino</option>
                            <option value="outro" <?php echo $currentUserData['genero'] == 'outro' ? 'selected' : ''; ?>>Prefiro não informar</option>
                        </select>
                    </div>

                    <!--Nome Materno-->
                    <div class="form-content">
                        <label id="labelMaterno" for="nomeMaterno"> Nome da Mãe:</label>
                        <input type="text" id="nomeMaterno" name="nomeMaterno" value="<?php echo htmlspecialchars($currentUserData['nomeMaterno']); ?>" placeholder="Digite o nome da sua mãe" required>
                    </div>

                    <!--CPF-->
                    <div class="form-content">
                        <label id="labelCPF" for="cpf"> CPF:</label>
                        <input type="text" id="cpf" name="cpf" value="<?php echo htmlspecialchars($currentUserData['cpf']); ?>" placeholder="Digite o seu CPF" required>
                    </div>   

                    <!--Telefones-->
                    <div class="form-content">
                        <label> Telefone fixo:</label>
                        <input type="tel" id="telefoneFixo" name="telefoneFixo" value="<?php echo htmlspecialchars($currentUserData['telefoneFixo']); ?>" placeholder="Digite o seu telefone fixo" required>  
                    </div>

                    <div class="form-content">
                        <label id="labelCelular" for="celular">Telefone Celular:</label>
                        <input type="tel" id="celular" name="celular" value="<?php echo htmlspecialchars($currentUserData['celular']); ?>" placeholder="Digite o seu celular" required>  
                    </div>

                    <!--Endereço-->
                    <div class="form-content">
                        <label id="labelCEP" for="CEP">CEP:</label>
                        <input type="text" id="CEP" name="CEP" value="<?php echo htmlspecialchars($currentUserData['CEP']); ?>" placeholder="Digite o seu CEP" required>      
                    </div> 

                    <div class="links">
                        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" class="criarconta">Não sei o CEP.</a>
                    </div>
                    <br>

                    <div class="form-content">
                        <label id="labelEndereco" for="endereco"> Endereço:</label>
                        <input type="text" id="endereco" name="endereco" value="<?php echo htmlspecialchars($currentUserData['endereco']); ?>" placeholder="Digite seu endereço">
                    </div>

                    <div class="form-content">
                        <label id="labelbairro" for="bairro">Bairro:</label>
                        <input type="text" id="bairro" name="bairro" value="<?php echo htmlspecialchars($currentUserData['bairro']); ?>" placeholder="Digite seu bairro">  
                    </div>

                    <div class="form-content">
                        <label id="labelcidade" for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" value="<?php echo htmlspecialchars($currentUserData['cidade']); ?>" placeholder="Digite sua cidade">  
                    </div>

                    <div class="form-content">
                        <label id="labeluf" for="uf">UF:</label>
                        <input type="text" id="uf" name="uf" value="<?php echo htmlspecialchars($currentUserData['uf']); ?>" placeholder="Digite seu estado (UF)">  
                    </div>

                    <div class="form-content">
                        <label id="labelnumero" for="numero">Nº:</label>
                        <input type="text" id="numero" name="numero" value="<?php echo htmlspecialchars($currentUserData['numero']); ?>" placeholder="Número da residência">  
                    </div>

                    <div class="form-content">
                        <label id="labelcomplemento" for="complemento">Complemento:</label>
                        <input type="text" id="complemento" name="complemento" value="<?php echo htmlspecialchars($currentUserData['complemento']); ?>" placeholder="Digite o complemento (Ex: Apto 1)">
                    </div>

                    <!--E-mail-->
                    <div class="form-content">
                        <label id="labelEmail" for="email"> E-mail:</label>
                        <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($currentUserData['email']); ?>" placeholder="Digite o seu e-mail" required>  
                    </div>

                    <!--Usuário-->
                    <div class="form-content">
                        <label id="labelUsuario" for="usuario"> Usuário:</label>
                        <input type="text" id="usuario" name="usuario"  maxlength="6" value="<?php echo htmlspecialchars($currentUserData['usuario']); ?>" placeholder="Digite o seu nome de usuário" required>  
                    </div>

                    <!--Senha-->
                    <div class="form-content">
                        <label id="labelSenha" for="senha"> Senha:</label>
                        <input type="password" id="senha" name="senha" maxlength="8" value="<?php echo htmlspecialchars($currentUserData['senha']); ?>" placeholder="Digite a sua senha" required>  
                    </div>

                    <div class="form-content">
                        <button type="submit" name="save" id="save">Salvar</button>
                        <button type="submit" name="cancel" id="cancel">Cancelar</button>
                        <button type="submit" name="reset" id="reset">Voltar ao original</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
</html>