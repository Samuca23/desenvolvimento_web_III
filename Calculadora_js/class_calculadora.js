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
        var oElementoCalculadora = this.montaDivCalculadora();
        var oElementoDivVisor = this.montaDivVisor();
        var oElementoDivNumber = this.montaDivNumber();

        /* Adiciona os Elementos para a Tela */
        oElementContainer[0].appendChild(oElementoCalculadora);
        oElementoCalculadora.appendChild(oElementoDivVisor);
        oElementoDivVisor.appendChild(this.montaVisorCalc());
        oElementoCalculadora.appendChild(oElementoDivNumber);

        /* Adicionando os botões para a Tela */
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

        /* Adicionar os botões de operação */
        var aButtonOperator = this.montaButtonOperatorCalc();
        aButtonOperator.forEach(function (oButtonOperator) {
            oElementoDivNumber.appendChild(oButtonOperator);
        });

        oElementoDivNumber.appendChild(this.montaButtonLimpa());
        oElementoDivNumber.appendChild(this.montaButtonIgual());
    }

    /**
     * Cria a Div da Calculadora.
     * 
     * @returns Element HTML
     */
    montaDivCalculadora = function () {
        var oElementoCalculadora = document.createElement('div');
        oElementoCalculadora.setAttribute('class', 'calculadora');
        this.styleCalculadora(oElementoCalculadora);

        return oElementoCalculadora;
    }

    /**
     * Cria a Div do visor.
     * 
     * @returns Element HTML
     */
    montaDivVisor = function () {
        var oElementoDivInput = document.createElement('div');
        oElementoDivInput.setAttribute('class', 'div-visor');

        return oElementoDivInput;
    }

    /**
     * Cria a Div dos Números.
     * 
     * @returns Element HTML
     */
    montaDivNumber = function () {
        var oElementoDivNumber = document.createElement('div', 'number');
        oElementoDivNumber.setAttribute('class', 'number');
        oElementoDivNumber.style.padding = '5px';

        return oElementoDivNumber;
    }

    /**
     * Cria o Visor da Calculadora.
     * 
     * @returns Element HTML
     */
    montaVisorCalc = function () {
        var oElementVisor = document.createElement("div");
        oElementVisor.setAttribute("class", "visor");

       this.styleVisor(oElementVisor);

        return oElementVisor;
    }

    /**
     * Cria os botões numéricos.
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
                var oVisorCalc = document.getElementsByClassName('visor')[0];
                oVisorCalc.innerText += this.innerText;
            });

            this.stylePadraoButtonNumber(oElementButton);
            aRetorno.push(oElementButton);
        }

        return aRetorno;
    }

    /**
     * Cria os operadores passados por parâmetro.
     * 
     * @param {Array} aOperador 
     * @returns Array
     */
    montaButtonOperatorCalc = function (aOperador = ['+', '-', '*', '/', '.']) {

        var aButtonOperator = [];

        aOperador.forEach(function (oOperador) {
            var oButtonOperator = document.createElement('button');
            oButtonOperator.setAttribute('class', 'btn btn-danger');
            oButtonOperator.style.width = '36px';
            oButtonOperator.style.margin = '1px';

            oButtonOperator.appendChild(document.createTextNode(oOperador));

            oButtonOperator.addEventListener('click', function () {
                var oVisorCalc = document.getElementsByClassName('visor')[0];
                if (oVisorCalc.innerText) {
                    oVisorCalc.innerText += this.innerText;
                }
            });
            aButtonOperator.push(oButtonOperator);
        });

        return aButtonOperator;
    }

    /**
     * Cria o botão de Igual.
     * 
     * @returns Element HMTL
     */
    montaButtonIgual = function () {
        var oElementButtonIgual = document.createElement("button");
        oElementButtonIgual.appendChild(document.createTextNode('='));
        oElementButtonIgual.setAttribute('class', 'btn btn-warning');

        oElementButtonIgual.addEventListener('click', function () {
            var oVisorCalc = document.getElementsByClassName('visor')[0];
            var sConta = oVisorCalc.innerText;

            if (sConta) {
                try {
                    var iResultado = eval(sConta);
                    if (iResultado) {
                        oVisorCalc.innerText = iResultado;
                    }
                }
                catch (e) {
                    alert('Passe uma expressão válida!');
                }
            }

        });

        this.styleButtonIgual(oElementButtonIgual);

        return oElementButtonIgual;
    }

    /**
     * Cria o Botão de Limpar o Visor.
     * 
     * @returns Element HTML
     */
    montaButtonLimpa = function () {
        var oElementButtonLimpar = document.createElement("button");
        oElementButtonLimpar.appendChild(document.createTextNode("C"));
        oElementButtonLimpar.setAttribute('class', 'btn btn-primary');

        oElementButtonLimpar.addEventListener('click', function () {
            var oVisorCalc = document.getElementsByClassName('visor')[0];
            oVisorCalc.innerText = "";
        });

        this.styleButtonLimpar(oElementButtonLimpar);

        return oElementButtonLimpar;
    }

    /**
     * Estilo para a Calculadora
     * 
     * @param {Elemnt} oCalc 
     */
    styleCalculadora = function (oCalc) {
        oCalc.style.width = '241px';
        oCalc.style.height = '261px';
        oCalc.style.backgroundColor = 'black';
        oCalc.style.borderRadius = '5px';
    }

    styleVisor = function (oVisor) {
        oVisor.style.width = '100%';
        oVisor.style.height = '50px';
        oVisor.style.backgroundColor = 'white';
        oVisor.style.border = '1px solid black';
        oVisor.style.fontSize = '30px';
    }

    /**
     * Estilo padrão para os botões numéricos.
     * 
     * @param {Element} oButton 
     */
    stylePadraoButtonNumber = function (oButton) {
        oButton.style.width = '75px';
        oButton.style.margin = '1px';
    }

    styleButtonIgual = function (oButton) {
        oButton.style.width = '117px';
        oButton.style.margin = '1px';
    }
    
    styleButtonLimpar = function (oButton) {
        oButton.style.width = '70px';
        oButton.style.margin = '1px';
    }

}

let calculadora = new Calculadora();