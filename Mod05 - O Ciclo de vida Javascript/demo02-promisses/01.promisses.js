const readline = require('readline');
const { REPL_MODE_STRICT } = require('repl');
const { resourceLimits } = require('worker_threads');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// terminal.question('Qual é o seu nome?\n', nome => {
//     terminal.question('Qual é o seu telefone?\n', telefone => {
//         console.log(`
//         Nome: ${nome}
//         Telefone: ${telefone}`)

//         terminal.close();
//     })
// })

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    });
}

let nome = ""
let telefone = ""

Promise.resolve()
    .then(() => questionAsync('Qual é o seu nome?'))
    .then(respostaNome => {
        if (!respostaNome) throw new Error('campo vazio!')
        nome = respostaNome
    })
    .then(() => questionAsync('Qual o seu telefone?'))
    .then(respostaTelefone => {
        if (!respostaTelefone) throw new Error('campo vazio!')
        telefone = respostaTelefone
    })
    .then(() => console.log(`Nome: ${nome}, Telefone: ${telefone}`))
    .catch(error => {
        console.log('Deu ruim!', error.stack)
    })
    .finally(() => terminal.close());