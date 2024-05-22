document.addEventListener('DOMContentLoaded',function(){ 
    
    const baseimagens = {
        todas: ['imagem.png', 'cidade.jpg', 'animais.jpg', 'natureza.jpg'],
        natureza: ['natureza.jpg'],
        cidade: ['cidade.jpg'],
        animais: ['animais.jpg'],
    }

function carregaImagens(){
    //selecionar elementos HTML com base em um seletor
    const galeria = document.querySelector("#galeria-imagens");

    const imagens = baseimagens['todas'];

    imagens.forEach(img => { 
    console.log(img);
        galeria.innerHTML += '<div> <img src="imagens/'+img+'"/>  </div>'
    })

}

carregaImagens();

    //evento de click
    document.body.addEventListener('click', function(event) {
        //acessa a lista de classe de onde clicou e 
        //procura pela classe botao-categoria
        if (event.target.classList.contains('botao-categoria')) { 
            alert(321);
        }
    })

})