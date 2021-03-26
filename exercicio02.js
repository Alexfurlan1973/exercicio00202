/// 2. Crie uma função que receba tres parâmetros (numero1, numero2, numero3) 
// e retorne o maior entre eles.

function maior(numero1, numero2, numero3) {
    let numeroMaior

    if (numero1 > numero2) {
        numeroMaior = numero1
    } else {
        numeroMaior = numero2
    }

    if (numero3 > numeroMaior) {
        numeroMaior = numero3
    }

    return numeroMaior
}

console.log(maior(40, 0, 15))