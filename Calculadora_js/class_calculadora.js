class Calculadora {

    constructor() {
        this.montaLayotCalculadora();
    }

    /**
     * Monta o Layout da Calculadora
     */
    montaLayotCalculadora = function () {
        var iPulaLinha = 0;
        var oElementContainer = document.getElementsByClassName('container');

        var oElementoCalculadora = document.createElement('div');
        oElementoCalculadora.setAttribute('class', 'calculadora');
        oElementoCalculadora.style.width = '300px';
        oElementoCalculadora.style.height = '200px';
        oElementoCalculadora.style.backgroundColor = 'black';

        var oElementoDivInput = document.createElement('div');
        oElementoDivInput.setAttribute('class', 'visor');

        var oElementoDivNumber = document.createElement('div', 'number');
        oElementoDivNumber.setAttribute('class', 'number');
        oElementoDivNumber.style.padding = '5px';

        oElementContainer[0].appendChild(oElementoCalculadora);
        oElementoCalculadora.appendChild(oElementoDivInput);
        oElementoDivInput.appendChild(this.montaInputCalc());
        oElementoCalculadora.appendChild(oElementoDivNumber);

        var aButtonNumber = this.montaButtonNumberCalc();
        aButtonNumber.forEach(function (oButtonNumber) {
            if (iPulaLinha == 3) {
                oElementoDivNumber.appendChild(document.createElement('br'));
                oElementoDivNumber.appendChild(oButtonNumber);
                iPulaLinha = 1;
                return;
            }
            iPulaLinha = iPulaLinha + 1;
            oElementoDivNumber.appendChild(oButtonNumber);
        });
    }

    /**
     * Monta o Input que será a Tela da Calculadora.
     * 
     * @returns 
     */
    montaInputCalc = function () {
        var oElementInput = document.createElement("input");
        oElementInput.setAttribute("type", "number");

        /* Estilo do Input */
        oElementInput.style.width = '100%';

        return oElementInput;
    }


    /**
     * Monta os botões numéricos.
     * 
     * @returns Array
     */
    montaButtonNumberCalc = function () {
        var aRetorno = [];
        for (var i = 9; i >= 0; i--) {
            var oElementButton = document.createElement("button");
            var iConteudoButton = document.createTextNode(i);

            oElementButton.appendChild(iConteudoButton);
            oElementButton.setAttribute('class', 'btn btn-success');
            oElementButton.addEventListener('click', function () {
                alert('Clicou');
            });

            /* Estilo dos botões */
            oElementButton.style.width = '75px';
            oElementButton.style.margin = '1px';

            aRetorno.push(oElementButton);
        }

        return aRetorno;
    }

    teste = function () {
        alert('boa');
    }

    montaButtonOperatorCalc = function () {
        var oButtonOperatorAdicao;
        var oButtonOperatorSubtracao;
        var oButtonOperatorMultiplicacao;
        var oButtonOperatorDivisao;
    }

}

let calculadora = new Calculadora();