const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de média
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair`;

// console.log(textoMenu)
// const opcao = 1

// switch(opcao) {
//     case 1:
//         console.log('pressionou 1')
//         break;
//     case 2:
//         console.log('pressionou 2')
//         break;
//     default:
//         console.log('opção inválida')
//         break;
// }

// terminal.question('Qual é o seu nome?', (msg) => {
//     console.log('Você escreveu', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'submenu! Pressione enter para selecionar mais opções...',
        fn: opcao1
    }
}

function opcao1(msg) {
    console.log('Não há mais opções!!!')
    terminal.close()
}

function menuInicial(msg) {
    const opcao = Number(msg)

    if (isNaN(opcao)) {
        throw new Error('Não é um número', msg)
    }

    switch (opcao) {
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('opção inválida!')
            terminal.close()
            break;
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn,
)