class JogoDaMemoria {
    // se manda um obj = { tela: 1, idade: 2, etc: 3 }
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util

        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman' },
            { img: './arquivos/cyclops.png', nome: 'cyclops' },
            { img: './arquivos/flash.png', nome: 'flash' },
            { img: './arquivos/hellboy.png', nome: 'hellboy' }
        ]
        this.iconePadrao = './arquivos/background.png';
        this.heroisEscondidos = [];
        this.heroisSelecionados = [];
    }
    // para usar o this, não podemos usar o static
    inicializar() {
        // vai pegar todas a funções da classe tela!
        this.tela.atualizarImagens(this.heroisIniciais);

        // força a tela a usar o THIS de Jogo da Memória
        this.tela.configurarBotaoJogar(this.jogar.bind(this));
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this));
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this));
    }
    async embaralhar() {

        const copias = this.heroisIniciais
            // duplicar os itens
            .concat(this.heroisIniciais)
            // entrar em cada item e criar um id aleatório
            .map(item => Object.assign({}, item, { id: Math.random() / 0.5 }))
            // ordenar aleatoriamente
            .sort(() => Math.random() - 0.5);

        this.tela.atualizarImagens(copias);
        this.tela.exibirCarregando();

        const idDoIntervalo = this.tela.iniciarContador();

        // vamos esperar 3 segundo para atualizar a tela
        await this.util.timeout(3000);
        this.tela.limparContador(idDoIntervalo);
        this.esconderHerois(copias);
        this.tela.exibirCarregando(false);
    }
    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes
        // pelo icone padrão
        // como fizemos no construtor, vamos extrair somente o necessário
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))

        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos);
        // guardamos os herios para trabalhar com eles depois
        this.heroisEscondidos = heroisOcultos;
    }
    exibirHerois(nomeDoHeroi) {
        // vamos procurar esse herois pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)

        // vamos criar uma função na tela para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verificar a quantidade de herois selecionados
        const heroisSelecionados = this.heroisSelecionados.length;
        switch (heroisSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela próxima escolha
                this.heroisSelecionados.push(item);
                break;
            case 1:
                // vamos obter o primeiro item da lista
                const [opcao1] = this.heroisSelecionados;

                // zerar itens para não selecionar mais de dois
                this.heroisSelecionados = [];

                // conferimos se os nomes e ids batem conforme o esperado
                if (opcao1.nome === item.nome &&
                    opcao1.id !== item.id) {
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem();
                    return;
                }
                this.tela.exibirMensagem(false);
                break;
        }
    }
    mostrarHeroisEscondidos() {
        // vamos pegar todos os herios da tela e colocar seu 
        // respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos;
        for (const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img;
        }

        this.tela.atualizarImagens(heroisEscondidos);
    }
    jogar() {
        this.embaralhar();
    }
}