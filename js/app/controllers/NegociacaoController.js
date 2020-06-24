class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        //mostra tabela
        this._negociacaoView = new NegociacaoView($('#negociacoesView'));
        this._negociacaoView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    //método para evento disparado
    adicionar(event) {
        //evita recarregamento da página
        event.preventDefault();

        //cria uma nova Negociação
        this._listaNegociacoes.adicionarNegociacao(this._criarNegociacao());

        //Atualiza a lista de negociações
        this._negociacaoView.update(this._listaNegociacoes);
        
        //mostra mensagem de cadastro
        this._mensagem.texto = 'Negociação Cadastrada com Sucesso!';
        this._mensagemView.update(this._mensagem);

        this._limparCampos();

    }

    //método para criar negociação
    _criarNegociacao(){
        return new Negociacao(
            DateHelper.StringtoDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    //método para limpar campos
    _limparCampos(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus();
    }
    //adicionar a negociação na lista
}

