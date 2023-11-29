const form= document.getElementById('form')
const usuarioInput= document.getElementById('usuario')
const senhaInput=document.getElementById('senha')

form.addEventListener("logar", (event) => {
  event.preventDefault();

  checkForm();
})

usuario.addEventListener("blur", () => {
  ValidarUsuario();
})

senha.addEventListener("blur", () => {
  ValidarSenha();
})



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

function checkForm(){
  
  ValidarUsuario();
  ValidarSenha();
 
  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
       
      alert("CADASTRADO COM SUCESSO!")

  }
}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

function logar() {
  document.querySelector("#usuario", "#senha").value;
    if ("#usuario", "#senha" === )

}