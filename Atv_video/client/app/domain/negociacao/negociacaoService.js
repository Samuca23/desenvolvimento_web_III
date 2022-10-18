class NegociacaoService {

    obterNegociacoesSemana(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            // 0 não iniciada
            // 1 conexao ok
            // 2 recebida
            // 3 processando
            // 4 concluido
            if (xhr.readyState == 4) {
                if (xhr.readyState == 200) {
                    console.log('obtendo');
                    const negociacoes = JSON.parse(xhr.responseText).map(objeto => {
                        new Negociacao(new Date(), objeto.quantidade, objeto.valor);
                    })
                    callback(null, negociacoes);
                }  else {
                    callback('Não foi possível obter as negociações da semana', null);
                }
            }

        };
        xhr.send();
    }

}