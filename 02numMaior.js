// Crie uma função que receba tres parâmetros (numero1, numero2, numero3) e retorne o maior entre eles.

function numMaior(num1, num2, num3){
let result
	if (num1 > num2 && num1 > num3){
		result = num1
	} else if (num1 < num2 && num2 > num3){
		result = num2
	} else if (num1 < num3 && num2 < num3){
		result = num3
	} else {
		result = 'Pelo menos dois números são iguais.'
	}
	return result
}