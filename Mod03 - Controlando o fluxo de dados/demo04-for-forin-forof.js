// for (let index = 0; index <= 10; index++) {
//     const decisao = index % 2 === 0 ? "par" : "impar";
//     console.log(`O número ${index} é ${decisao}`)
// }

const minhaListaDeTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Veloz'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Mariazinha',
        superPoder: 'Super força'
    }
]

// utilizando contador
for (let index = 0; index < minhaListaDeTarefas.length; index++) {
    const element = minhaListaDeTarefas[index];
    console.log(element)
}

// não precisa de contador
for(const index in minhaListaDeTarefas){
    const item = minhaListaDeTarefas[index]
    console.log(item)
}

//não precisa usar o index
for (const item of minhaListaDeTarefas) {
    console.log(item)
}