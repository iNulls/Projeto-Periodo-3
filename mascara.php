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
            <h1>Número Máscara</h1>
                <h2>Proteja identidades profissionais</h2>
                <h4>Garanta aos seus clientes a capacidade de fazer chamadas e enviar
                    mensagens sem expor seus números de telefone pessoais.
                    <p>• Mascare um número de telefone para interações com mais
                    privacidade.</p>
                    <p>• Permite que empresas façam negócios usando menos
                    números de telefone.</p>
                    <p>• Oferece uma experiência mais segura e profissional</p></h4>
                    <h2>Recursos Avançados</h2>
                    <h4><p>• SMS – Número máscara é totalmente funcional para chamadas de voz e SMS.</p>
                        <p>• Geo Match – Combine o código do país do número mascarado com o da chamada de origem
                        passando pro cliente a impressão de que vocês estão na mesma região.</p>
                        <p>• Gestão de Sessões – Habilite números máscara permanentes, bloqueie chamadas indesejadas,
                        validade de sessão e etc.</p>
                        <p>• Relatórios – Acesso direto do cliente à relatórios detalhados.</p>
                        <p>• Números Simultâneos - Use o mesmo número máscara em várias ligações simultâneas.</p>
                        <p>• Triagem de Conteúdo – Recurso SMS onde você pode sinalizar conteúdos sensíveis para proteger
                        dados do cliente.</p>
                        <p>• Escalabilidade Ilimitada – compre e adicione números conforme necessário.</p></h4>
            <h2>Quem usa?</h2>
            <img src="img/mascara.jpg" alt="mascara" class="image">
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