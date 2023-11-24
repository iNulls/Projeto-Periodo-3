
const form= document.getElementById('form')
const nomeInput= document.getElementById('nome')
const dataNascInput= document.getElementById('dataNascimento')
const generoInput= document.getElementById('genero')
const nomeMaternoInput=document.getElementById('nomematerno')
const cpfInput=document.getElementById('cpf')
const telefoneFixoInput=document.getElementById('telefone')
const celularInput=document.getElementById('celular')
const enderecoInput=document.getElementById('endereco')
const emailInput= document.getElementById('email')
const usuarioInput= document.getElementById('usuario')
const senhaInput=document.getElementById('senha')
const confirmaSenhaInput= document.getElementById('confirmar')
const modal = document.querySelector('dialog')
const buttonClose=document.querySelector('dialog button')

form.addEventListener("salvar", (event) => {
  event.preventDefault();

  checkForm();
})


nome.addEventListener("blur", () => {
  ValidarNome();
})

dataNascimento.addEventListener("blur", () => {
  ValidarDataNascimento();
})

genero.addEventListener("blur", () => {
  ValidarGenero();
})

nomematerno.addEventListener("blur", () => {
  ValidarNomeMaterno();
})

cpf.addEventListener("blur", () => {
  ValidarCPF();
})

telefoneFixo.addEventListener("blur", () => {
 ValidarTelefoneFixo();
})

celular.addEventListener("blur", () => {
 ValidarTelefoneCelular();
})

endereco.addEventListener("blur", () => {
 ValidarTelefoneCelular();
})

endereco.addEventListener("blur", () => {
 ValidarEndereco();
})

email.addEventListener("blur", () => {
  ValidarEmail();
})


usuario.addEventListener("blur", () => {
  ValidarUsuario();
})

senha.addEventListener("blur", () => {
  ValidarSenha();
})

confirmar.addEventListener("blur", () => {
  ValidarConfirmacaoSenha();;
})


function ValidarNome(){
  const nomeValue = nomeInput.value;

  if(nomeValue === ""){
    errorInput(nomeInput, "Preencha o nome completo!")
  }else{
    const formItem = nomeInput.parentElement;
    formItem.className = "form-content"
  }

}

function ValidarDataNascimento(){
  const nomeValue = dataNascInput.value;

  if(nomeValue === ""){
    errorInput(dataNascInput, "Preencha a data de nascimento!")
  }else{
    const formItem = dataNascInput.parentElement;
    formItem.className = "form-content"
  }

}

function ValidarGenero(){
  const generoValue = generoInput.value;

  if(generoValue === ""){
    errorInput(generoInput, "Escollha o gênero!")
  }else{
    const formItem = generoInput.parentElement;
    formItem.className = "form-content"
  }

}

function ValidarNomeMaterno(){
  const nomeMaternoValue = nomeMaternoInput.value;

  if(nomeMaternoValue === ""){
    errorInput(nomeMaternoInput, "O nome materno é obrigatório.")
  }else{
    const formItem = nomeMaternoInput.parentElement;
    formItem.className = "form-content"
  }

}




function ValidarCPF(){
  const cpfValue = cpfInput.value;
  const cpfRegex = new RegExp(/^(?:[0-9]{3}\.){2}(?:[0-9]{3}\-)(?:[0-9]){2}$/)
  

  if(cpfValue === ""){
    errorInput(cpfInput, "O cpf é obrigatório.")
  }else{
         if (!cpfRegex.test(cpfValue)){
              errorInput(cpfInput, "Preencha um CPF válido!")
         }
         if (!ValidaCpf(cpfValue)){
              errorInput(cpfInput, "Preencha um CPF válido!")
         }
         else{
              const formItem = cpfInput.parentElement;
              formItem.className = "form-content"
         }
      }
}


function ValidaCpf(cpf){
  cpf = cpf.replace(/\.|-/g,"");

  soma = 0;
  soma +=cpf[0]*10;
  soma +=cpf[1]*9;
  soma +=cpf[2]*8;
  soma +=cpf[3]*7;
  soma +=cpf[4]*6;
  soma +=cpf[5]*5;
  soma +=cpf[6]*4;
  soma +=cpf[7]*3;
  soma +=cpf[8]*2;
    soma = (soma*10)%11;
    if(soma == 10 || soma == 11)
      soma = 0;
    if (soma != cpf[9])
      return false;

    soma = 0;
  soma +=cpf[0]*11;
  soma +=cpf[1]*10;
  soma +=cpf[2]*9;
  soma +=cpf[3]*8;
  soma +=cpf[4]*7;
  soma +=cpf[5]*6;
  soma +=cpf[6]*5;
  soma +=cpf[7]*4;
  soma +=cpf[8]*3;
  soma +=cpf[9]*2;
  soma = (soma*10)%11;
    if(soma == 10 || soma == 11)
      soma = 0;
    if(soma != cpf[10])
      return false
   return true;

}



function ValidarTelefoneFixo(){
  const telefoneFixoValue = telefoneFixoInput.value;

  const formItem = telefoneFixoInput.parentElement;
  formItem.className = "form-content"

}


function ValidarTelefoneCelular(){
  const celularValue = celularInput.value;

  if(celularValue === ""){
    errorInput(celularInput, "O celular é obrigatório.")
  }else{
    const formItem = celularInput.parentElement;
    formItem.className = "form-content"
  }

}

function ValidarEndereco(){
  const enderecoValue = enderecoInput.value;

  if(enderecoValue === ""){
    errorInput(enderecoInput, "O endereço é obrigatório.")
  }else{
    const formItem = enderecoInput.parentElement;
    formItem.className = "form-content"
  }

}


function ValidarEmail(){
  const emailValue = emailInput.value;

  if(emailValue === ""){
    errorInput(emailInput, "O email é obrigatório.")
  }else{
    const formItem = emailInput.parentElement;
    formItem.className = "form-content"
  }

}


function ValidarUsuario(){

  const usuarioValue = usuarioInput.value;
  const usuarioRegex = new RegExp(/^[a-zA-Z]{6}$/);

  if(usuarioValue === ""){
    errorInput(usuarioInput, "Preencha o usuario!")
  }else{
        if (!usuarioRegex.test(usuarioValue)){
              errorInput(usuarioInput, "O usuario precisa ter 6 caracteres alfabeticos!")
        }else{
          const formItem = usuarioInput.parentElement;
          formItem.className = "form-content"
        }
    }
}



function ValidarSenha(){
  const senhaValue = senhaInput.value;
  const senhaRegex = new RegExp(/^[a-zA-Z]{8}$/);

  if(senhaValue === ""){
    errorInput(senhaInput, "A senha é obrigatória.")
  }else if (!senhaRegex.test(senhaValue)){
              errorInput(senhaInput, "A senha precisa ter 8 caracteres alfabeticos!")
        }else{
              const formItem = senhaInput.parentElement;
              formItem.className = "form-content"
  }

}


function ValidarConfirmacaoSenha(){
  const senhaValue = senhaInput.value;
  const confirmaSenhaValue = confirmaSenhaInput.value;

  if(confirmaSenhaValue === ""){
    errorInput(confirmaSenhaInput, "A confirmação de senha é obrigatória.")
  }else if(confirmaSenhaValue !== senhaValue){
    errorInput(confirmaSenhaInput, "As senhas não são iguais.")
  }else{
    const formItem = confirmaSenhaInput.parentElement;
    formItem.className = "form-content"
  }

}











function checkForm(){
  ValidarNome();
  ValidarDataNascimento();
  ValidarGenero();
  ValidarNomeMaterno()
  ValidarCPF();
  ValidarTelefoneFixo();
  ValidarTelefoneCelular();
  ValidarEndereco();
  ValidarUsuario();
  ValidarEmail();
  ValidarSenha();
  ValidarConfirmacaoSenha();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
       Modal();
       CloseModal();
        setTimeout(function(){
        location.href="login.html";
        }, 6000);
       
  }
}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

function Modal(){
    modal.showModal()
}

function CloseModal(){
     buttonClose.onclick = function(){
      modal.close();
    }
}

// Salvar LocalStorage //

let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")

let dataNascimento = document.querySelector("#dataNascimento")
let labelDataNasc = document.querySelector("#labelDataNasc")

let cpf = document.querySelector("#cpf")
let labelCPF = document.querySelector("#labelCPF")

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")

function cadastrar() {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

    listaUser.push(
    {
      nomeCad: nome.value,
      cpfCad: cpf.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )

    localStorage.setItem("listaUser", JSON.stringify(listaUser))
    }