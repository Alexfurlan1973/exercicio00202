// Crie uma função que receba dois parâmetros (numero1, numero2) e retorne o maior entre eles.

function numMaior(num1, num2){
let result
	if (num1 > num2){
		result = num1
	} else if (num1 < num2){
		result = num2
	} else {
		result = 'Os números são iguais.'
	}
	return result
}

// Testando commit