let controller = new NegociacaoConttroller();

document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));