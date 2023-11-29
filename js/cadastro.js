let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")

let dataNascimento = document.querySelector("#dataNascimento")
let labelDataNasc = document.querySelector("#labelDataNasc")

let nomeMaterno = document.querySelector("#nomeMaterno")
let labelMaterno = document.querySelector("#labelMaterno")

let cpf = document.querySelector("#cpf")
let labelCPF = document.querySelector("#labelCPF")

let celular = document.querySelector("#celular")
let labelCelular = document.querySelector("#labelCelular")

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")


const form=document.querySelector('#form')
const nomeInput=document.querySelector('#nome')
const dataNascInput=document.querySelector('#dataNascimento')
const generoInput=document.querySelector('#genero')
const nomeMaternoInput=document.querySelector('#nomeMaterno')
const cpfInput=document.querySelector('#cpf')
const telefoneFixoInput=document.querySelector('#telefone')
const celularInput=document.querySelector('#celular')
const enderecoInput=document.querySelector('#endereco')
const emailInput=document.querySelector('#email')
const usuarioInput=document.querySelector('#usuario')
const passwordInput=document.querySelector('#senha')

form.addEventListener("submit",(event)=>{
	event.preventDefault();

		
	ValidarNome();
	ValidarDataNascimento();
	ValidarGenero();
	ValidarNomeMaterno();
	ValidarCPF();
	//ValidarCelular();
	ValidarEmail();
	ValidarUsuario();
	ValidarSenha();

	
	// Se todos os campos estiverem preenchidos envie o form

	form.submit();
})




//==============================================
//       VALIDAR NOME
//==============================================

function ValidarNome(){



	//verifica se o nome está vazio
	if(nomeInput.value === ""){
		alert("Preencha o seu nome")
		return;
	}

	if(ValidaNomeRegex(nomeInput.value)){
		labelNome.setAttribute("style", "color: green")
    	labelNome.innerHTML = "Nome Completo"
    	nome.setAttribute("style", "border-color: green")
		return;
	}
	else{
		labelNome.setAttribute("style", "color: red")
    	labelNome.innerHTML = "Nome *Insira seu Nome Completo"
    	nome.setAttribute("style", "border-color: red")
		return;

	}
}


function ValidaNomeRegex(nome){

// cria uma regex para validar nome

	const nomeRegex = new RegExp(/^[a-zA-Z\s]{15,60}$/,"");
	
	if (nomeRegex.test(nome)){

		return true;
	}
	else{
		
		return false;
	}


}

// FIM VALIDAÇÃO NOME
//==============================================


//==============================================
//  VALIDAR FORMATAÇÃO DA DATA DE NASCIMENTO
//==============================================

//verifica o campo data de nascimento está vazio

function ValidarDataNascimento(){
	
	if(dataNascInput.value === ""){
		alert("O campo data de nascimento está vazio")
		return;
	}

	if(ValidaDataNascRegex(dataNascInput.value))
	{
		labelDataNasc.setAttribute("style", "color: green")
	    labelDataNasc.innerHTML = "Data de Nascimento"
	    dataNascimento.setAttribute("style", "border-color: green")
		return;
	}
	else{
		labelDataNasc.setAttribute("style", "color: red")
	    labelDataNasc.innerHTML = "*Insira data completa"
	    dataNascimento.setAttribute("style", "border-color: red")
		return;
	}
}



function ValidaDataNascRegex(dataNasc){
		
	// cria uma regex para validar a data de nascimento

		const dataNascRegex = new RegExp(/^((?:[0-9]){2})\/((?:[0-9]){2})\/((?:[0-9]){4})$/)
		
		if (dataNascRegex.test(dataNasc)){
			
			return true;
		}
		else{
			
			return false;
		}	
	}


//===============================================
//        VALIDAÇÃO DO GÊNERO
//===============================================

function ValidarGenero(){

//Verfica se o campo de genero foi selecionado
	if(generoInput.value === ""){
			alert("Selecione um genero")
		}
}


//==============================================
//       VALIDAR NOME DA MÃE
//==============================================

function ValidarNomeMaterno(){

	//verifica se o nome está vazio
	if(nomeMaternoInput.value === ""){
		alert("preencha o nome da sua mãe")
		return;
	}

	if(ValidaNomeMaternoRegex(nomeMaternoInput.value)){
		labelMaterno.setAttribute("style", "color: green")
	    labelMaterno.innerHTML = "Nome Mãe"
	    nomeMaterno.setAttribute("style", "border-color: green")
		return;
	}
	else{
		labelMaterno.setAttribute("style", "color: red")
	    labelMaterno.innerHTML = "Nome Mãe *Insira no minimo o Nome e Sobrenome"
	    nome.setAttribute("style", "border-color: red")
		return;
	}
}


function ValidaNomeMaternoRegex(nomematerno){

// cria uma regex para validar nome

	const nomeMaternoRegex = new RegExp(/^[a-zA-Z\s]{3,60}$/,"");
	
	if (nomeMaternoRegex.test(nomematerno)){
		
		return true;
	}
	else{
		
		return false;
	}
}

// FIM VALIDAÇÃO NOME DA MÃE
//=============================================

//===============================================
//        VALIDAÇÃO DO CPF
//===============================================

function ValidarCPF(){

	if(cpfInput.value === ""){
		alert("O campo do CPF está vazio");
		return;
	}

	if(ValidaCpfRegex(cpfInput.value)){
		if(ValidaCpf(cpf.value)){
			labelCPF.setAttribute("style", "color: green")
    		labelCPF.innerHTML = "CPF"
    		cpf.setAttribute("style", "border-color: green")
			return;
		}
		else{
			labelCPF.setAttribute("style", "color: red")
    		labelCPF.innerHTML = "CPF *Insira os 11 numeros validos"
    		cpf.setAttribute("style", "border-color: red")
			return;
		}
		//return;
	}
	else{
		return;
	}

}


//  VALIDAÇÃO DE FORMATAÇÃO DO CPF COM REGEX
//===============================================

function ValidaCpfRegex(cpf){

// cria uma regex para validar cpf

	const cpfRegex = new RegExp(/^(?:[0-9]{3}\.){2}(?:[0-9]{3}\-)(?:[0-9]){2}$/)
	
	if (cpfRegex.test(cpf)){
		
		return true;
	}
	return false;
}

//===============================================
//    VALIDAÇÃO  CPF COM REGEX
//===============================================

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



//==============================================
//       VALIDAR USUÁRIO
//==============================================

function ValidarUsuario(){
      
	//verifica se o nome está vazio
	if(usuarioInput.value === ""){
		alert("preencha o nome do usuario")
		return;
	}

	if(ValidaUsuarioRegex(usuarioInput.value)){
	    labelUsuario.setAttribute("style", "color: green")
	    labelUsuario.innerHTML = "Usuario"
	    usuario.setAttribute("style", "border-color: green")
		return;
	}
	else{
	    labelUsuario.setAttribute("style", "color: red")
	    labelUsuario.innerHTML = "Usuario *Invalido"
	    usuario.setAttribute("style", "border-color: red")
		return;
	}
}


function ValidaUsuarioRegex(usuario){

// cria uma regex para validar nome

	const usuarioRegex = new RegExp(/^[a-zA-Z\s]{3,6}$/,"");
	
	if (usuarioRegex.test(usuario)){
		return true;
	}
	else{
		return false;
	}
}

// FIM VALIDAÇÃO USUÁRIO
//=============================================



//==============================================
//       VALIDAR EMAIL
//==============================================


function ValidarEmail(){
	//verifica se o email está preenchido e é valido

	if(emailInput.value === "") {
		alert("preencha o seu email");
		return;
	}

	if (ValidaEmailRegex(emailInput.value)) {
		labelEmail.setAttribute("style", "color: red")
	    labelEmail.innerHTML = "Email *Invalido"
	    email.setAttribute("style", "border-color: red")
	    return;
	} else {
		labelEmail.setAttribute("style", "color: green")
	    labelEmail.innerHTML = "Email"
	    email.setAttribute("style", "border-color: green")
	    return;
	}
}



function ValidaEmailRegex(email){

// cria uma regex para validar email

	const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]\.[a-zA-Z]{2,60}$/);

	if (emailRegex.test(email)){

		return true;
	} else {

	return false;
	}
}




//==============================================
//       VALIDAR SENHA
//==============================================


/* */
function ValidarSenha(){
	//verifica se a senha está preenchida 


	if(ValidaSenha(passwordInput.value,8)){
	    labelSenha.setAttribute("style", "color: green")
	    labelSenha.innerHTML = "Senha"
	    senha.setAttribute("style", "border-color: green")
		return;
	}
	else{
	    labelSenha.setAttribute("style", "color: red")
	    labelSenha.innerHTML = "Senha *Invalida insira no minimo 6 caracteres"
	    senha.setAttribute("style", "border-color: red")
		return;
	}
}


//verifica senha

function ValidaSenha(password, minDigitos){
	if(password.length >= minDigitos){
		labelConfirmarSenha.setAttribute("style", "color: green")
	    labelConfirmarSenha.innerHTML = "Confirmar Senha"
	    confirmar.setAttribute("style", "border-color: green")
		return true;
	}
		labelConfirmarSenha.setAttribute("style", "color: red")
	    labelConfirmarSenha.innerHTML = "Confirmar Senha *As senhas não são iguais"
	    confirmar.setAttribute("style", "border-color: red")
	 	return false;

}