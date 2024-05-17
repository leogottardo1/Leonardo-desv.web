document.addEventListener('DOMContentLoaded',function(){ 
    
    const baseimagens = {
        todas: ['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
        natureza: [],
        cidade: [],
        animais: [],
    }

    //evento de click
    document.body.addEventListener('click', function(event) {
        //acessa a lista de classe de onde clicou e 
        //procura pela classe botao-categoria
        if (event.target.classList.contains('botao-categoria')) { 
            alert(321);
        }
    })

})