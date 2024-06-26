<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telecall</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>
<body>
    <div class="login">
        <img src="img/TELECALL-01.jpg" alt="image" class="login__bg">

        <form action="php/login.php" method="post" class="login__form">
         <h4><a href="index.php">Voltar</a></h4>
           <h1 class="login__title">Login</h1>

           <div class="login__inputs">
              <div class="login__box">
                 <input id="usuario" type="usuario" name="usuario" maxlength="6" placeholder="Usuario" required class="login__input">
                 <i class="ri-mail-fill"></i>
              </div>

              <div class="login__box">
                 <input id="senha" type="password" name="senha" maxlength="8" placeholder="Senha" required class="login__input">
                 <i class="ri-lock-2-fill"></i>
              </div>
           </div>

           <div class="login__check">
              <div class="login__check-box">
                 <input type="checkbox" class="login__check-input" id="user-check">
                 <label for="user-check" class="login__check-label">Remember me</label>
              </div>
           </div>
           <div class="rec_senha">
            <a class="rec_senha" href="recuperar.php">Esqueci minha senha</a>
         </div>
           <input type="submit" value="Login" class="login__button">
           <input type="reset" class="limpar" value="Limpar">

           <div class="login__register">
              Não tem conta? <a href="cadastro.php">Cadastre-se</a>
           </div>
        </form>
   </div>

</body>
   <footer>
      <script src="js/entrar.js"></script>
      <script src="js/form.js"></script>
   </footer>
      
</html>