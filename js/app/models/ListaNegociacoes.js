class ListaNegociacoes{

    constructor(){
        this._negociacoes = [];
    }
    //método para adicionar um novo elemento a Lista de Negociações
    adicionarNegociacao(negociacao){
        this._negociacoes.push(negociacao);
    }
    //método que devolve a Lista de Negociações
    get negociacoes(){
        return [].concat(this._negociacoes);
    }
}