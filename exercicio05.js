// 5. Crie uma função chamada cadastraProduto(nome, valor).
// Dica: Use um array fora da function e adicione o objeto dentro dele.

const produtos = []

function cadastraProduto(nome, valor) {
    const obj = { nome, valor }

    produtos.push(obj)
}

cadastraProduto('feijao', 10)
cadastraProduto('arroz', 7)
cadastraProduto('carne', 40)

console.log(produtos)