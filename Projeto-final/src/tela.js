// métodos estáticos não podem acessar o `this`
// por isso, não vamos colocar o util no construtor
const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"

const MENSAGENS = {
    sucesso: {
        texto: 'Combinação correta!',
        classe: 'alert-success'
    },
    erro: {
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }
}

class Tela {
    static obterCodigoHtml(item) {
        return `<div class="col-md-3">
    <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
        <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="Chaves">
    </div>
    <br />
</div>`
    }
    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO);
        conteudo.innerHTML = codigoHtml;
    }
    static gerarStringHtmlPelaImagem(itens) {
        // para cada item da lista, vai executar a função Tela.obterCodigoHtml
        // ao final, vai concatenar tudo em uma unica string
        // muda de Array para String
        return itens.map(Tela.obterCodigoHtml).join('');
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens);
        Tela.alterarConteudoHtml(codigoHtml);
    }
    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR);
        btnJogar.onclick = funcaoOnClick;
    }
    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificarSelecao = funcaoOnClick
    }
    static exibirHerois(nomeDoHeroi, img) {
        const elementosHtml = document.getElementsByName(nomeDoHeroi)

        // para cada elemento encontrado na tela, vamos alterar a imagem para 
        // a imagem inicial dele
        elementosHtml.forEach(item => (item.src = img));
    }
    static async exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM);
        if (sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe);
            elemento.classList.add(MENSAGENS.sucesso.classe);
            elemento.innerText = MENSAGENS.sucesso.texto;
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe);
            elemento.classList.add(MENSAGENS.erro.classe);
            elemento.innerText = MENSAGENS.erro.texto;
        }
        elemento.classList.remove(CLASSE_INVISIVEL);
        await util.timeout(1000)
        elemento.classList.add(CLASSE_INVISIVEL);
    }
    static exibirCarregando(mostrar = true) {
        const carregando = document.getElementById(ID_CARREGANDO)

        if (mostrar) {
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }
        carregando.classList.add(CLASSE_INVISIVEL);
    }
    static iniciarContador() {
        let contarAte = 3;
        const elementoContador = document.getElementById(ID_CONTADOR)

        // vamos substituir o texto Começando $$contador segundos
        // onde está o $$contador adicionaremos o valor
        const identificadorNoTexto = "$$contador"
        const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`
        // vamos criar uma funcao em linha para atualizar o texto
        // a cada segundo
        const atualizarTexto = () =>
            (elementoContador.innerText = textoPadrao.replace(identificadorNoTexto, contarAte--))

        atualizarTexto();
        // a cada segundo, vai chamar a função atualizar texto
        // essa função vai substituir o $$contador pelo `contarAte` diminuindo
        // retornamos o idDoIntervalo para para ele mais tarde
        const idDoIntervalo = setInterval(atualizarTexto, 1000);
        return idDoIntervalo;
    }
    static limparContador(idDoIntervalo) {
        clearInterval(idDoIntervalo);
        // deixamos sem texto
        document.getElementById(ID_CONTADOR).innerHTML = "";
    }
    static configurarBotaoMostrarTudo(funcaoOnClick) {
        const btnMosrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
        btnMosrarTudo.onclick = funcaoOnClick;
    }
}