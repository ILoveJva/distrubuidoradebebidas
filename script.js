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
            if (!iszero) {
                imagemcc.src = "imagens/cocazero250ml.webp"
            } else {
                imagemcc.src = "imagens/cocacola250ml.webp";
            }
            break;
        case '290':
            if (!iszero) {
                imagemcc.src = "imagens/ks0.webp"
            } else {
                imagemcc.src = "imagens/cocaks.jpg";
            }
            break;
        case '310':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero310ml.jfif"
            } else {
                imagemcc.src = "imagens/cocacola310ml.jfif";
            }
            break;
        case '350':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero350ml.jpg"
            } else {
                imagemcc.src = "imagens/cocacola350ml.jfif";
            }
            break;
        case '600':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero600ml.png"
            } else {
                imagemcc.src = "imagens/cocacola600ml.webp";
            }
            break;
        case '1000':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero1l.webp"
            } else {
                imagemcc.src = "imagens/cocacola1l.webp";
            }
            break;
        case '1500':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero1_5l.webp"
            } else {
                imagemcc.src = "imagens/cocacola1_5l.jpeg";
            }
            break;
        case '2000':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero2l.png"
            } else {
                imagemcc.src = "imagens/cocacola2l.png";
            }
            break;
        case '2500':
            if (!iszero) {
                imagemcc.src = "imagens/cocazero2_5l.webp"
            } else {
                imagemcc.src = "imagens/cocacola2_5l.webp";
            }
            break;
    }
}