<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="css/cadastroUm.css">
     <script type="text/javascript" src="./js/jquery.js"></script>
     <script type="text/javascript" src="./js/jquery.mask.js"></script>

    <title>Cadastro</title>
</head>
<body>
     <div class="conteudo-cliente">
        <div class="container">
            <section class='header'>
                <h2>Cadastre-se</h2>
            </section>
            <form action="php/processo_cadastro.php" method="POST" id="form" class="form">    
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
                    <input type="text" id="nome" name="nome" placeholder="Digite o nome do completo" oninput="maiuscula(this)" required>
                </div>

                <!--Nascimento-->

                <div class="form-content">
                    <label id="labelDataNasc" for="dataNascimento"> Data de nascimento:</label>
                    <input type="date" id="dataNascimento" name="dataNascimento" placeholder="Digite a data de nascimento (dd/mm/aaaa)" max="2005-12-31" required>      
                </div>
                
                <!--Sexo-->

                <div class="form-content" >
                    <label for="genero"> Gênero:</label>
                    <select name="genero" id="genero" name="genero" placeholder="Escolha">
                        <option value="" disabled selected></option>
                        <option value="masc">Masculino</option>
                        <option value="fem">Feminino</option>
                        <option value="outro">Prefiro não informar</option>
                    </select>
                </div>

                <!--Nome Materno-->

                <div class="form-content">
                    <label id="labelMaterno" for="nomeMaterno"> Nome da Mãe:</label>
                    <input type="text" id="nomeMaterno" name="nomeMaterno" placeholder="Digite o nome da sua mãe" oninput="maiuscula(this)" required>
                </div>

                <!--CPF-->

                <div class="form-content">
                    <label id="labelCPF" for="cpf"> CPF:</label>
                    <input type="text" id="cpf" name="cpf" placeholder="Digite o seu cpf" onblur="valida(this)" required>
                </div>   

                <!--Telefones-->

                <div class="form-content">
                    <label> Telefone fixo:</label>
                    <input type="tel" id="telefoneFixo"  name="fixo" placeholder="Digite o seu telefone fixo" required>  
                </div>

                <div class="form-content">
                    <label id="labelCelular" for="celular">Telefone Celular:</label>
                    <input type="cel" id="celular"  name="celular" placeholder="Digite o seu celular" required>  
                </div>

                <!--Endereço-->

                <div class="form-content">
                    <label id="labelCEP" for="CEP">CEP:</label>
                    <input type="text" id="CEP"  name="CEP" placeholder="Digite o seu CEP" required>  
                    <a href="https://buscacepinter.correios.com.br/app/endereco/index.php">Não sei meu CEP.</a>
                </div> 
                
                <div class="form-content">
                    <label id="labelEndereco" for="endereco"> Endereço:</label>
                    <input type="text" id="endereco"  name="endereco">
                </div>

                <div class="form-content">
                    <label id="labelbairro" for="bairro">Bairro:</label>
                    <input type="text" id="bairro"  name="bairro">  
                </div>
                
                <div class="form-content">
                    <label id="labelcidade" for="cidade">Cidade:</label>
                    <input type="text" id="cidade"  name="cidade">  
                </div>

                <div class="form-content">
                    <label id="labeluf" for="uf">UF:</label>
                    <input type="text" id="uf"  name="uf">  
                </div>

                <div class="form-content">
                    <label id="labelnumero" for="numero">Nº:</label>
                    <input type="text" id="numero"  name="numero" placeholder="Digite seu numero" required>  
                </div>

                <div class="form-content">
                    <label id="labelcomplemnento" for="complemento">Complemento:</label>
                    <input type="text" id="complemento"  name="complemento">  
                </div>

                <!--Email-->

                <div class="form-content">
                    <label id="labelEmail" for="email"> Email:</label>
                    <input type="text"  id="email" name="email" placeholder="Digite o seu email" required> 
                </div>

                <!--Login e Senha-->

                <div class="form-content">
                    <label id="labelUsuario" for="usuario"> Usuário:</label>
                    <input type="text" id="usuario" name="usuario" maxlength="6" placeholder="Digite o nome do usuario" onkeydown="ajustaLoginSenha(this)" , onkeypress="ajustaLoginSenha(this)" ,
                    onkeyup="ajustaLoginSenha(this)" required>
                 </div>

                <div class="form-content">
                    <label id="labelSenha" for="senha"> Senha:</label>
                    <input type="password" id="senha"  name="senha"
                    placeholder="Digite sua senha" maxlength="8" onkeydown="ajustaLoginSenha(this)" , onkeypress="ajustaLoginSenha(this)" ,
                    onkeyup="ajustaLoginSenha(this)" required>  
                </div>

                <div class="form-content">
                    <label id="labelConfirmarSenha" for="confirmar"> Confirmar Senha:</label>
                    <input type="password" id="confirmar"  name="confirmar" placeholder="Digite a sua senha novamente" maxlength="8" onkeydown="ajustaLoginSenha(this)" ,
                    onkeypress="ajustaLoginSenha(this)" , onkeyup="ajustaLoginSenha(this)" required> 
                </div>

                <button type="submit" id="submit" name="submit">Salvar</button>
                <button type="reset" class="btn btn-dark">Limpar</button>

                <div>
                    <a href="index.php" class="btn btn-primary btn-lg mt-3">Voltar para tela Principal</a>
                </div>
                <div class="links">
                    <a href="login.php" class="criarconta">Já possui conta? Entre aqui</a>
                </div>
            </form>
        </div>
    </div>
    <dialog>
        <h2>Cadastrado com sucesso</h2>
    </dialog>
  
    <script src="js/form.js"></script>
    <script src="js/jquery.js"></script>


</body>
</html>