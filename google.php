<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telecall</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>
<body>
    <header>
        <nav class="nav">
            <ul class='nav-bar'>
                <input type='checkbox' id='check' />
                <li class='logo'><a href='index.php'><img src='img/logo.png'/></a></li>
                <span class="menu">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="servicos.php">Serviços</a>
                        <div class="sub-menu-1">
                              <ul>
                                <li><a href="2fa.php">2FA</a></li>
                                <li><a href="google.php">Google Verified</a></li>
                                <li><a href="sms.php">SMS</a></li>
                                <li><a href="mascara.php">Numero de Mascára</a></li>
                                </ul>
                                <?php if ($loggedIn): ?>
                                <li class="dropdown">
                                    <a href="#" class="dropbtn"><?php echo htmlspecialchars($username); ?></a>
                                    <div class="dropdown-content">
                                        <a href="profile.php">Editar Perfil</a>
                                        <a href="logout.php">Sair</a>
                                    </div>
                                </li>
                                    <?php else: ?>
                                        <li><a href="login.php">Login</a></li>
                                    <?php endif; ?>
                         </div>
                    </li>
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                </span>
                <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
            </ul>
        </nav>
   </header>
   <div class="container">
    <div class="column">
        <div class="row">
            <h1>GOOGLE VERIFIED CALLS</h1>
            <h2>O que é?</h2>
            <h3>Chamadas verificadas.</h3>
            <h4>Esse novo recurso do Google, exclusivo para
                telefones Android, permite que empresas exibam
                para o cliente na hora da chamada sua marca,
                logotipo e até mesmo o motivo da chamada.
                A Telecall é a primeira operadora de telecom no
                Brasil a oferecer esse recurso do Google.</h4>
            
            <h2>O problema</h2>
            <h3>Ligações de spam.</h3>
            <h4><p>• O Brasil é o país que mais sofre com ligações
                de spam no mundo.</p>
            <p>• Desde 2017, as chamadas telefônicas de
                spam no Brasil aumentaram 141%.</p>
            <p>• O brasileiro recebe em média 49,9 ligações
                de spam por mês.</p></h4>
            
            <h2>Benefícios:</h2>
            <h3>• Estabeleça Confiança</h3>
            <h4><p>Clientes são mais propensos a atender chamadas de organizações com os quais estão
                familiarizadas e com as quais já tem relação.</p></h4>
            <h3>• Agilize a Conexão</h3>
            <h4><p>Quando o motivo da chamada é claro, a chance de o cliente atender é muito maior e a conexão
                com ele mais rápida e eficiente.</p></h4>
            <h3>• Melhore a Experiência do Cliente</h3>
            <h4><p>O nome da marca, logotipo e a visualização do motivo da chamada oferecem uma experiencia
                melhor e muito mais amigável para o cliente.</p>
            </h4>
           
           
            <h2>Ligações indesejadas no Brasil</h2>
            <img src="img/google.jpg" alt="google" class="graf">
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container2">
        <div class="row2">
            <div class="footer-col">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="https://www.telecall.com/faq/?_gl=1*9xoxaw*_ga*NDE0NTk4MzE1LjE2OTcyOTk0NDc.*_ga_MDDSN8Q5HF*MTY5ODc4NjkzNi44LjEuMTY5ODc4NzU0My4wLjAuMA..*_ga_V9EJZGZCD5*MTY5ODc4NjkzNy44LjEuMTY5ODc4NzU0My4zMC4wLjA.">FAQ</a></li>
                    <li><a href="https://carreirastelecall.solides.jobs/">Carreiras</a></li>
                    <li><a href="https://www.telecall.com/en/vendas/?_gl=1*14q7e9r*_ga*NDE0NTk4MzE1LjE2OTcyOTk0NDc.*_ga_MDDSN8Q5HF*MTY5ODc4NjkzNi44LjEuMTY5ODc4NzU5MC4wLjAuMA..*_ga_V9EJZGZCD5*MTY5ODc4NjkzNy44LjEuMTY5ODc4NzU5MC42MC4wLjA.">Vendas</a></li>
                    <li><a href="https://www.telecall.com/politica-e-privacidade/?_gl=1*14q7e9r*_ga*NDE0NTk4MzE1LjE2OTcyOTk0NDc.*_ga_MDDSN8Q5HF*MTY5ODc4NjkzNi44LjEuMTY5ODc4NzU5MC4wLjAuMA..*_ga_V9EJZGZCD5*MTY5ODc4NjkzNy44LjEuMTY5ODc4NzU5MC42MC4wLjA.">Politica e Privacidade</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contratos</h4>
                <ul>
                    <li><a href="https://www.telecall.com/wp-content/uploads/2023/01/manual-dos-telefones.pdf?_gl=1*eyfu7*_ga*NDE0NTk4MzE1LjE2OTcyOTk0NDc.*_ga_MDDSN8Q5HF*MTY5ODc4NjkzNi44LjEuMTY5ODc4NzY4NS4wLjAuMA..*_ga_V9EJZGZCD5*MTY5ODc4NjkzNy44LjEuMTY5ODc4NzY4NS42MC4wLjA.">Manual dos Telefones</a></li>
                    <li><a href="https://www.telecall.com/wp-content/uploads/2023/01/TELECALL-Contrato-Prestacao-STFC.pdf?_gl=1*eyfu7*_ga*NDE0NTk4MzE1LjE2OTcyOTk0NDc.*_ga_MDDSN8Q5HF*MTY5ODc4NjkzNi44LjEuMTY5ODc4NzY4NS4wLjAuMA..*_ga_V9EJZGZCD5*MTY5ODc4NjkzNy44LjEuMTY5ODc4NzY4NS42MC4wLjA.">Prestação STFC</a></li>
                    <li><a href="https://www.telecall.com/wp-content/uploads/2023/01/TELECALL-Contrato-de-prestacao-do-servico-movel-pessoal.pdf?_gl=1*eyfu7*_ga*NDE0NTk4MzE1LjE2OTcyOTk0NDc.*_ga_MDDSN8Q5HF*MTY5ODc4NjkzNi44LjEuMTY5ODc4NzY4NS4wLjAuMA..*_ga_V9EJZGZCD5*MTY5ODc4NjkzNy44LjEuMTY5ODc4NzY4NS42MC4wLjA.">Prestação SMP</a></li>
                    <li><a href="https://www.telecall.com/wp-content/uploads/2023/01/Lista-de-Municipios-por-Estado-Atendidos-por-SMP-pela-Telecall.pdf?_gl=1*eyfu7*_ga*NDE0NTk4MzE1LjE2OTcyOTk0NDc.*_ga_MDDSN8Q5HF*MTY5ODc4NjkzNi44LjEuMTY5ODc4NzY4NS4wLjAuMA..*_ga_V9EJZGZCD5*MTY5ODc4NjkzNy44LjEuMTY5ODc4NzY4NS42MC4wLjA.">Cobertura SMP</a></li>
                </ul>
            </div>
            <div class="footer-col">
                    <h4>Serviços</h4>
                    <ul>
                        <li><a href="2fa.php">2FA</a></li>
                        <li><a href="google.php">Google Verified</a></li>
                        <li><a href="sms.php">SMS</a></li>
                        <li><a href="mascara.php">Numero de Mascára</a></li>
                    </ul>
                </div>
            <div class="footer-col">
                <h4> Contato</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/TelecallBr"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/telecallbr/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/telecall/"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
    <script src="js/script.js"></script>
</body>
</html>