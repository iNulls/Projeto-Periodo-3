
const usuarioInput= document.getElementById('usuario')
const senhaInput=document.getElementById('senha')

form.addEventListener("submit", (event) => {
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

  if(usuarioValue === ""){
    errorInput(usuarioInput, "Preencha o usuario!")
  }else{
    const formItem = usuarioInput.parentElement;
    formItem.className = "form-content"
  }

}


function ValidarSenha(){
  const senhaValue = senhaInput.value;

  if(senhaValue === ""){
    errorInput(senhaInput, "A senha é obrigatória.")
  }else if(senhaValue.length < 8){
    errorInput(senhaInput, "A senha precisa ter no mínimo 8 caracteres.")
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