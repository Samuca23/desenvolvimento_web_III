class NegociacaoConttroller {

    constructor() {
        const $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes(this, function(model) {
            this._negociacoesView.update(model);
        });
        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com Sucesso!';
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

    apaga() {
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

}