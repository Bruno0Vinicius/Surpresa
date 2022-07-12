const botao = document.querySelector('#Sobre-Mim-Botao');

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight , behavior: "smooth"});
})