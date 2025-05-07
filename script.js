function escolhertamanho() {
    let opcao = document.querySelector('select').value;
    let imagemcc = document.querySelector('img#cocacola');
    let iszero = document.querySelector('input[name="tipocc"]').checked; console.log(iszero)
    switch (opcao) {
        case '200':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero200ml.jfif"
            } else {
                imagemcc.src = "imagens/cocacola200ml.jfif";
            }
            break;
        case '250':
            imagemcc.src = "imagens/cocacola250ml.webp";
            break;
        case '290':
            imagemcc.src = "imagens/cocaks.jpg";
            break;
        case '310':
            imagemcc.src = "imagens/cocacola310ml.jfif";
            break;
    }
    
}