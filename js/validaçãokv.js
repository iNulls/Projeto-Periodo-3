let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let dataNascimento = document.querySelector("#dataNascimento")
let labelDataNasc = document.querySelector("#labelDataNasc")
let validDataNasc = false

let nomeMaterno = document.querySelector("#nomeMaterno")
let labelMaterno = document.querySelector("#labelMaterno")
let validMaterno = false

let cpf = document.querySelector("#cpf")
let labelCPF = document.querySelector("#labelCPF")
let validCPF = false

let celular = document.querySelector("#celular")
let labelCelular = document.querySelector("#labelCelular")
let validCelular = false

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")
let validEmail = false

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let validUsuario = false

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

nome.addEventListener("keyup", () => {
  if(nome.value.length <= 6){
    labelNome.setAttribute("style", "color: red")
    labelNome.innerHTML = "Nome *Insira no minimo o Nome e Sobrenome"
    nome.setAttribute("style", "border-color: red")
    validNome = false
  } else {
    labelNome.setAttribute("style", "color: green")
    labelNome.innerHTML = "Nome"
    nome.setAttribute("style", "border-color: green")
    validNome = true
  }
    
})

dataNascimento.addEventListener("keyup", () => {
  if(dataNascimento.value.length <= 7){
    labelDataNasc.setAttribute("style", "color: red")
    labelDataNasc.innerHTML = "*Insira data completa"
    dataNascimento.setAttribute("style", "border-color: red")
    validDataNasc = false
  } else {
    labelDataNasc.setAttribute("style", "color: green")
    labelDataNasc.innerHTML = "Data de Nascimento"
    dataNascimento.setAttribute("style", "border-color: green")
    validDataNasc = true
  }
    
})

nomeMaterno.addEventListener("keyup", () => {
  if(nomeMaterno.value.length <= 4){
    labelMaterno.setAttribute("style", "color: red")
    labelMaterno.innerHTML = "Nome Materno *Insira no minimo o Nome e Sobrenome"
    nome.setAttribute("style", "border-color: red")
    validMaterno = false
  } else {
    labelMaterno.setAttribute("style", "color: green")
    labelMaterno.innerHTML = "Nome Materno"
    nomeMaterno.setAttribute("style", "border-color: green")
    validMaterno = true
  }
    
})

cpf.addEventListener("keyup", () => {
  if(cpf.value.length === 11){
    labelCPF.setAttribute("style", "color: green")
    labelCPF.innerHTML = "CPF"
    cpf.setAttribute("style", "border-color: green")
    validCPF = false
  } else {
    labelCPF.setAttribute("style", "color: red")
    labelCPF.innerHTML = "CPF *Insira os 11 numeros validos"
    cpf.setAttribute("style", "border-color: red")
    validCPF = true
  }
    
})

celular.addEventListener("keyup", () => {
  if(celular.value.length === 11){
    labelCelular.setAttribute("style", "color: green")
    labelCelular.innerHTML = "Telefone Celular"
    celular.setAttribute("style", "border-color: green")
    validCelular = false
  } else {
    labelCelular.setAttribute("style", "color: red")
    labelCelular.innerHTML = "Telefone Celular *Insira o DDD e o numero corretamente"
    celular.setAttribute("style", "border-color: red")
    validCelular = true
  }
    
})

email.addEventListener("keyup", () => {
  if(email.value.length <= 5){
    labelEmail.setAttribute("style", "color: red")
    labelEmail.innerHTML = "Email *Invalido"
    email.setAttribute("style", "border-color: red")
    validEmail = false
  } else {
    labelEmail.setAttribute("style", "color: green")
    labelEmail.innerHTML = "Email"
    email.setAttribute("style", "border-color: green")
    validEmail = true
  }
    
})

usuario.addEventListener("keyup", () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute("style", "color: red")
    labelUsuario.innerHTML = "Usuario *Invalido"
    usuario.setAttribute("style", "border-color: red")
    validUsuario = false
  } else {
    labelUsuario.setAttribute("style", "color: green")
    labelUsuario.innerHTML = "Usuario"
    usuario.setAttribute("style", "border-color: green")
    validUsuario = true
  }
    
})

senha.addEventListener("keyup", () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute("style", "color: red")
    labelSenha.innerHTML = "Senha *Invalida insira no minimo 6 caracteres"
    senha.setAttribute("style", "border-color: red")
    validSenha = false
  } else {
    labelSenha.setAttribute("style", "color: green")
    labelSenha.innerHTML = "Senha"
    senha.setAttribute("style", "border-color: green")
    validSenha = true
  }
    
})

confirmar.addEventListener("keyup", () => {
  if(senha.value != confirmar.value){
    labelConfirmarSenha.setAttribute("style", "color: red")
    labelConfirmarSenha.innerHTML = "Confirmar Senha *As senhas não são iguais"
    confirmar.setAttribute("style", "border-color: red")
  } else {
    labelConfirmarSenha.setAttribute("style", "color: green")
    labelConfirmarSenha.innerHTML = "Confirmar Senha"
    confirmar.setAttribute("style", "border-color: green")
  }
    
})

function cadastrar() {
    if(validNome && validUsuario && validSenha){
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )

    localStorage.setItem("listaUser", JSON.stringify(listaUser))

    alert("Cadastrado com Sucesso!!!")

     } else {
      alert("Preencha os campos corretamente!!")
     }
   }