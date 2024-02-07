function goldenFreddyChega(id){
    const portaFrontal = document.querySelector(".animatronicNaPorta");
    const dutoEsquerdo = document.querySelector(".animatronicDutoEsquerdo");
    const dutoDireito = document.querySelector(".animatronicDutoDireito");

    picoDeEnergia();
    if(id == 0){
        
        portaFrontal.style.backgroundImage = "url('assets/img/golden-freddy.png')";
    }else if(id == 1){
        dutoEsquerdo.style.backgroundImage = "url('assets/img/golden-freddy.png')";
    }else if(id == 2){
        dutoDireito.style.backgroundImage = "url('assets/img/golden-freddy.png')";
    }
}



let nGolden;