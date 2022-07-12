function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i ) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
const nome_anim = document.getElementsByClassName('principal-nome');
typeWriter(nome_anim[0]);