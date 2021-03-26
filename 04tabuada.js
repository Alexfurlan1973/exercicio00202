// Crie uma função chamada imprimirTabuada(numero) e faça com que ela imprima a tabuada de multiplicação do número passado como parâmetro.

function imprimirTabuada(num){
		for (let i = 1; i <= 10; i++) {
		    console.log(num + " x " + [i] + " = " + num * [i])
		}
}