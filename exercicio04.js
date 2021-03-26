// 4. Crie uma função chamada imprimirTabuada(numero) e faça com que 
// ela imprima a tabuada de multiplicação do número passado como parâmetro.

function imprimirTabuada(numero) {
    console.log(`TABUADA DO ${numero}\n`)

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}

imprimirTabuada(5)
