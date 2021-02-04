// enquanto não mudar, não para!

let termoDeParada = true
let contador = 0

while (termoDeParada) {
    termoDeParada = contador < 10;

    if (contador % 2 === 0) {
        console.log('Número par', contador);
    }

    contador++;
}

do {
    console.log('Só uma vez! pois o termoDeParada é', termoDeParada)
} while (termoDeParada)


