// Crie uma função chamada cadastraProduto(nome, valor).
// Dica: Use um array fora da function e adicione o objeto dentro dele.

let result = [{produto: '', preco: 0}]
function cadastraProduto(nome, valor){
	result = [
	{
		produto: nome,
		preco: valor
	}
	]
return result
}