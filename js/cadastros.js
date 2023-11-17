
const form=document.querySelector('#form')
const nomeInput=document.querySelector('#nome')
const dataNascInput=document.querySelector('#dataNascimento')
const generoInput=document.querySelector('#genero')
const nomematernoInput=document.querySelector('#nomematerno')
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
	//ValidarTelefoneFixo();
	//ValidarTelefoneCelular();
	//ValidarEndereco();
	//ValidarEmail();
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
		alert("preencha o seu nome")
		return;
	}

	if(ValidaNomeRegex(nomeInput.value)){
		alert("O campo do regex validado");
		return;
	}
	else{
		alert("O campo do regex invalidado");
		return;
	}
}


function ValidaNomeRegex(nome){

// cria uma regex para validar nome

	const nomeRegex = new RegExp(/^[a-zA-Z\s]{3,60}$/,"");
	
	if (nomeRegex.test(nome)){
		alert("Nome Valido")
		return true;
	}
	else{
		alert("O nome é invalidado");
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
		alert("O campo da data de nascimento validado");
		return;
	}
	else{
		alert("O campo do data de nascimento invalido");
		return;
	}
}

/*

ValidaDataNascRegex(dataNasc){
	
// cria uma regex para validar a data de nascimento

	const dataNascRegex = new RegExp(/^((?:[0-9]){2})\/((?:[0-9]){2})\/((?:[0-9]){4})$/)
	
	if (dataNascRegex.test(dataNasc)){
		alert("Data de Nascimento Valido");
		return true;
	}
	else{
		alert("Data de Nascimento  invalidado");
		return false;
	}	
}
*/


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
	if(nomematernoInput.value === ""){
		alert("preencha o nome da sua mãe")
		return;
	}

	if(ValidaNomeMaternoRegex(nomematernoInput.value)){
		alert("O campo do regex validado");
		return;
	}
	else{
		alert("O campo do regex invalidado");
		return;
	}
}


function ValidaNomeMaternoRegex(nomematerno){

// cria uma regex para validar nome

	const nomeMaternoRegex = new RegExp(/^[a-zA-Z\s]{3,60}$/,"");
	
	if (nomeMaternoRegex.test(nomematerno)){
		alert("Nome Válido Kryptoniano")
		return true;
	}
	else{
		alert("O nome é  invalidado");
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
		alert("O campo do regex validado");
		if(ValidaCpf(cpf.value)){
			alert(" o seu cpf é valido");
			return;
		}
		else{
			alert("preencha um cpf valido");
			return;
		}
		//return;
	}
	else{
		alert("O campo do regex invalidado");
		return;
	}

}


//  VALIDAÇÃO DE FORMATAÇÃO DO CPF COM REGEX
//===============================================

function ValidaCpfRegex(cpf){

// cria uma regex para validar cpf

	const cpfRegex = new RegExp(/^(?:[0-9]{3}\.){2}(?:[0-9]{3}\-)(?:[0-9]){2}$/)
	
	if (cpfRegex.test(cpf)){
		alert("CPF Válido!!! ")
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
    alert("Primeiro d"+soma);
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
     alert("Segundo d"+soma);
    if(soma != cpf[10])
    	return false
   return true;

}


//===============================================
//   FORMATAÇÃO DE TELEFONE FIXO
//===============================================

/*
ValidarTelefoneFixo(){
		if (telefoneInput.value === '') {
            telefoneInput.value = '(+55)';
          }

}
*/


//===============================================
//   FORMATAÇÃO DE CELULAR
//===============================================
/*
ValidarCelular(){
		if (telefoneInput.value === '') {
            telefoneInput.value = '(+55)';
          }

}
*/



//===============================================
//   VALIDAÇÃO DO ENDEREÇO
//===============================================

/*
ValidarEndereco(){
		if (telefoneInput.value === '') {
            telefoneInput.value = '(+55)';
          }

}

*/

//===============================================
//   VALIDAÇÃO DO EMAIL
//===============================================
/*
ValidarEmail(){
		if (telefoneInput.value === '') {
            telefoneInput.value = '(+55)';
          }

}

*/



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
		alert("O campo do regex validado");
		return;
	}
	else{
		alert("O campo do regex invalidado");
		return;
	}
}


function ValidaUsuarioRegex(usuario){

// cria uma regex para validar nome

	const usuarioRegex = new RegExp(/^[a-zA-Z\s]{3, 6}$/);
	
	if (usuarioRegex.test(usuario)){
		alert("Nome Válido Kryptoniano")
		return true;
	}
	else{
		alert("O nome é  invalidado");
		return false;
	}
}

// FIM VALIDAÇÃO USUÁRIO
//=============================================



//==============================================
//       VALIDAR EMAIL
//==============================================

// função que valida email
/*
function ValidarEmail(){
	//verifica se o email está preenchido e é valido

	if(emailInput.value === "" || !ValidaEmail(emailInput.value)){
		alert("preencha o seu email");
		return;
	}

}

function ValidaEmail(email){

// cria uma regex para validar email

	const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]\.[a-zA-Z]{2,}$/);

	if (emailRegex.test(email)){
		return true;
	}
	return false;
}


*/


//==============================================
//       VALIDAR SENHA
//==============================================


/* */
function ValidarSenha(){
	//verifica se a senha está preenchida 


	if(ValidaSenha(passwordInput.value,8)){
		alert("A senha é valida");
		return;
	}
	else{
		alert("A senha precisa ser no minimo 8 digitos");
		return;
	}
}


//verifica senha

function ValidaSenha(password, minDigitos){
	if(password.length >= minDigitos){
		//senha valida
		return true;
	}
	//senha invalida
	 return false;
}
