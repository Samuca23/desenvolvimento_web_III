class NegociacaoConttroller {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com Sucesso!';
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem);
        this._limparFormulario();
    }

    _limparFormulario() {
        this._inputData.value = '2022-01-03';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 2.0
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

}