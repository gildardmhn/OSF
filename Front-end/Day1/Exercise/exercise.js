$("#myForm").submit(function(){
	let Form = $(this);
	let arrayForm = Form.serializeArray();

	let nome = arrayForm[0]
	let sobrenome = arrayForm[1]
	let email = arrayForm[2]
	let senha = arrayForm[3]

	alert("Nome:" + nome.value + "\n" + "sobrenome:" + sobrenome.value + "\n" + "email:" + email.value + "\n" + "senha:" + senha.value)
	console.log(arrayForm)
});