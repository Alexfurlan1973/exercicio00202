/*

3. Na geometria existem três tipos de triângulos que são categorizados conforme os seus lados
  - Equilatero (3 lados iguais)
  - Isósceles (2 lados iguais)
  - Escaleno (0 lados iguais)

Crie uma função que receba como parâmetro os três lados do triangulo e retorne qual o tipo dele. Exemplo:

tipoTriangulo(1, 4, 4) // retorna isósceles 
*/

function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'equilatero'
    }

    if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return 'isoceles'
    } else {
        return 'escaleno'
    }
}

console.log(tipoTriangulo(5, 4, 3))