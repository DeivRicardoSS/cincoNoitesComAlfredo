//controles
function virarEsquerda(){
    const quarto = document.querySelector(".quarto");
    quarto.style.transform = "scale3d(1, 1, 1) rotateX(0deg) rotateY(-22deg) rotateZ(0deg) translate3d(200px, 0px, 400px) skew(0deg, 0deg)";
}
function virarCentro(){
    const quarto = document.querySelector(".quarto");
    quarto.style.transform = 'scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0px, 0px, 420px) skew(0deg, 0deg)';
}
function virarDireita(){
    const quarto = document.querySelector(".quarto");
    quarto.style.transform = 'scale3d(1, 1, 1) rotateX(0deg) rotateY(22deg) rotateZ(0deg) translate3d(-200px, 0px, 400px) skew(0deg, 0deg)';
}


document.addEventListener('keydown', function(tecla){
    if(tecla.key === 'a'){
        virarEsquerda();
    }
    else if(tecla.key === 'd'){
        virarDireita();
    }
});

document.addEventListener('keyup', function(tecla){
    if(tecla.key === 'a'){
        virarCentro();
    }
    else if(tecla.key === 'd'){
        virarCentro();
    }
});