const minhaLista = []
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto',
    'comprar fósforos'
]

// console.log(minhaListaDeTarefas)

// console.log(minhaListaDeTarefas[0])
// console.log(minhaListaDeTarefas[1])
// console.log(minhaListaDeTarefas[4])

// Quantidade de itens no array
// console.log(minhaListaDeTarefas.length);

// // Adicionar um item
// minhaListaDeTarefas.push('formatar computador');
// console.log(minhaListaDeTarefas);

// // Remover último da lista
// minhaListaDeTarefas.pop();
// console.log(minhaListaDeTarefas);

// // Remover o primeiro da lista
// minhaListaDeTarefas.shift()
// console.log(minhaListaDeTarefas)

// // Inserir na primeira posicao
// minhaListaDeTarefas.unshift('andar de bicibleta')
// console.log(minhaListaDeTarefas)

// // Remover um item específico a partir de um índice
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]

// console.log(typeof(itens));

// // verificar se é array da forma correta
// console.log("É array? ", Array.isArray(itens) ? 'sim' : 'não')

// Ordenar
// const numeros = [3,2,1,0]
// console.log(numeros.sort())

// Juntar dois arrays
const novo = itens.concat([4, 5, 6])
// console.log(novo)

// Juntar arrays em uma string
// console.log(novo.join(', '));

// Verificar índice do item
console.log(itens.indexOf('computador'))