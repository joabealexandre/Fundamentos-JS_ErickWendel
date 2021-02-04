function nomeDaFuncao(parametro1) {
    // bloco de código
}

function queDiaEHoje() {
    const data = new Date()
    console.log(`Hoje é dia ${data.getDate()}`)
}

function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é igual a`, valor1 + valor2);
}

queDiaEHoje()
soma(2, 2)

// funções podem retornar valores
function somaResult(valor1, valor2) {
    return valor1 + valor2;
}

////////

const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
} 

funcionario1.salarioLiquido = calcularDesconto(funcionario1.salarioBruto, funcionario1.desconto)
funcionario2.salarioLiquido = calcularDesconto(funcionario2.salarioBruto, funcionario2.desconto)

