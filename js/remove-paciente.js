var tabela = document.querySelector("#tabela-pacientes");
// fico ouvindo o evento da tabela inteira double click
tabela.addEventListener("dblclick", function(event){
    // adiciona a classe que remove o elemento com efeito
    event.target.parentNode.classList.add("fadeOut");
    // coloca um tempo de esperar para executar a funcao
    setTimeout(() => {
        // pego com o event.target em qual element foi clicado da tabela (TD)
        // pego o pai deste elemento (TR) e removo ele
        event.target.parentNode.remove();
    }, 500);
});