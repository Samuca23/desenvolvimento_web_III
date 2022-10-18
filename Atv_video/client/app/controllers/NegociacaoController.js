class NegociacaoConttroller {

    constructor() {
        const $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia');

        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);

        this._mensagem = new Bind(new Mensagem(), new MensagemView('#mensagemView'), 'texto');
    }

    adiciona(event) {
        try {
            event.preventDefault();
            this._negociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com Sucesso!';
            this._limparFormulario();
        } catch (err) {
            console.log(err);
            if (err instanceof DataInvalidaExcpetion) {
                this._mensagem.texto = err.message;
            } else {
                this._mensagem.texto = 'Erro inesperado';
            }
        }
    }

    _limparFormulario() {
        this._inputData.value = '01/01/2022';
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
    }

}