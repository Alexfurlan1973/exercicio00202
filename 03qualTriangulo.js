// Na geometria existem três tipos de triângulos que são categorizados conforme os seus lados
//   - Equilatero (3 lados iguais)
//   - Isósceles (2 lados iguais)
//   - Escaleno (0 lados iguais)
// Crie uma função que receba como parâmetro os três lados do triangulo e retorne qual o tipo dele.

function triangulo(lado1, lado2, lado3){
	let result
	if (lado1 === lado2 && lado1 === lado3) {
	    result = 'Triângulo Equilátero'
	} else if (lado1 === lado2 && lado1 !== lado3) {
	    result = 'Triângulo Isósceles'
	} else if (lado1 !== lado2 && lado2 === lado3) {
		result = 'Triângulo Isósceles'
	} else if (lado1 === lado3 && lado2 !== lado3) {
		result = 'Triângulo Isósceles'
		} else {
	    result = 'Triângulo Escaleno'
	}
return result
}