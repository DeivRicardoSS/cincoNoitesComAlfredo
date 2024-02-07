const musicaFoxy = document.getElementById("musicaFoxy");
const somCorreria = document.getElementById("ataqueFoxyF");
const somCorreriaAtaque = document.getElementById("ataqueFoxyT");
let nFoxy = 0;

const foxySala5 = document.querySelector(".sala5 .fox");

let foxyAtivo = false;

function foxyChega(id){
    const portaFrontal = document.querySelector(".animatronicNaPorta");
    const dutoEsquerdo = document.querySelector(".animatronicDutoEsquerdo");
    const dutoDireito = document.querySelector(".animatronicDutoDireito");

    picoDeEnergia();
    if(id == 0){
        portaFrontal.style.backgroundImage = "url('assets/img/fox.png')";
    }else if(id == 1){
        dutoEsquerdo.style.backgroundImage = "url('assets/img/fox.png')";
    }else if(id == 2){
        dutoDireito.style.backgroundImage = "url('assets/img/fox.png')";
    }
}

function foxyCanta(){
    musicaFoxy.addEventListener('ended', ()=>{
        foxySala5.style.display = 'none';
        if(porta0 == true){
            somCorreria.addEventListener('ended', ()=>{
                foxySala5.style.display = 'block';
            })
            somCorreria.play();
            foxyAtivo = false;
        
        }else{
            somCorreriaAtaque.addEventListener('ended', ()=>{
            foxyKill();
        })
        somCorreriaAtaque.play();
        }
    })
    musicaFoxy.play();
}



function foxyKill(){
    const somGrito = document.getElementById("grito");
    const jumpscare = document.querySelector(".areajunpscare");
    somGrito.addEventListener('ended', ()=>{
        encerrarPartida();
    })
    somGrito.play();
    jumpscare.style.backgroundImage = "url('assets/img/foxyjumpscare.gif')";
}

function ativarFoxy(){
    foxyAtivo = true;
    foxyCanta();
}

