let tempTpFreddy = 10000;
let freddyLocal = "none";
let timeAtaqueFreddy;

let nFreddy;

let freddyAtivo = false;

const freddySala1 = document.querySelector(".sala1 .freddy");
const freddySala2 = document.querySelector(".sala2 .freddy");
const freddySala3 = document.querySelector(".sala3 .freddy");
const freddySala4 = document.querySelector(".sala4 .freddy");
const freddySala5 = document.querySelector(".sala5 .freddy");

function ativarFreddy(){
    freddyAtivo = true;
    freddyTeleport();
}

function freddyChega(id){
    

    
    picoDeEnergia();
    if(id == 0){
        freddySala1.style.display = "none";
        freddySala2.style.display = "none";
        freddySala3.style.display = "none";
        freddySala4.style.display = "none";
        freddySala5.style.display = "none";
        portaFrontal.style.backgroundImage = "url('assets/img/freddy.png')";
    }else if(id == 1){
        freddySala1.style.display = "none";
        freddySala2.style.display = "none";
        freddySala3.style.display = "none";
        freddySala4.style.display = "none";
        freddySala5.style.display = "none";
        dutoEsquerdo.style.backgroundImage = "url('assets/img/freddyDuto.png')";
    }else if(id == 2){
        freddySala1.style.display = "none";
        freddySala2.style.display = "none";
        freddySala3.style.display = "none";
        freddySala4.style.display = "none";
        freddySala5.style.display = "none";
        dutoDireito.style.backgroundImage = "url('assets/img/freddyDuto.png')";
    }
    setTimeout(detectarKillFreddy, 10000);
    console.log("atackFreddyIniciado");
}

function detectarKillFreddy(){
    
    
    
    if(freddyLocal == "porta"){
        if(porta0 == true && freddyAtivo == true){
            console.log("Freddy Saiu do " + freddyLocal);
            portaFrontal.style.backgroundImage = "none"
            freddyTeleport();
            freddyLocal = "none";
            portaOcupada = false;
        }else if(porta0 == false  && freddyAtivo == true){
            portaFrontal.style.backgroundImage = "none"
            freddyKill();
        }
    }else if(freddyLocal == "duto1"  && freddyAtivo == true){
        if(duto1 == true){
            console.log("Freddy Saiu do " + freddyLocal);
            dutoEsquerdo.style.backgroundImage = "none"
            freddyLocal = "none";
            duto1Ocupado = false;
            freddyTeleport();
        }else if(duto1 == false  && freddyAtivo == true){
            dutoEsquerdo.style.backgroundImage = "none"
            freddyKill();
        }
    }else if(freddyLocal == "duto2"){
        if(duto2 == true && freddyAtivo == true){
            console.log("Freddy Saiu do " + bonnieLocal);
            dutoDireito.style.backgroundImage = "none"
            freddyLocal = "none";
            duto2Ocupado = false;
            freddyTeleport();
        }else if(duto2 == false && freddyAtivo == true){
            animatronicDutoDireito.style.backgroundImage = "none"
            freddyKill();
        }
    }

}

function freddyKill(){
    const somGrito = document.getElementById("grito");
    const jumpscare = document.querySelector(".areajunpscare");
    somGrito.addEventListener('ended', ()=>{
        encerrarPartida();
    })
    somGrito.play();
    jumpscare.style.backgroundImage = "url('assets/img/freddyjumpscare.gif')";
}

function freddyTeleport(){
    nFreddy = numeroAleatorio(1, 5);

    if(nFreddy == 1 && freddyAtivo == true){
        freddySala1.style.display = "block";
        freddySala2.style.display = "none";
        freddySala3.style.display = "none";
        freddySala4.style.display = "none";
        freddySala5.style.display = "none";
        setTimeout(freddyTeleport, tempTpFreddy);
    }else if(nFreddy == 2 && freddyAtivo == true){
        freddySala1.style.display = "none";
        freddySala2.style.display = "block";
        freddySala3.style.display = "none";
        freddySala4.style.display = "none";
        freddySala5.style.display = "none";
        setTimeout(ataqueFreddy, tempTpFreddy);
    }else if(nFreddy == 3 && freddyAtivo == true){
        freddySala1.style.display = "none";
        freddySala2.style.display = "none";
        freddySala3.style.display = "block";
        freddySala4.style.display = "none";
        freddySala5.style.display = "none";
        setTimeout(ataqueFreddy, tempTpFreddy);
    }else if(nFreddy == 4 && freddyAtivo == true){
        freddySala1.style.display = "none";
        freddySala2.style.display = "none";
        freddySala3.style.display = "none";
        freddySala4.style.display = "block";
        freddySala5.style.display = "none";
        setTimeout(ataqueFreddy, tempTpFreddy);
    }else if(nFreddy == 5 && freddyAtivo == true){
        freddySala1.style.display = "none";
        freddySala2.style.display = "none";
        freddySala3.style.display = "none";
        freddySala4.style.display = "none";
        freddySala5.style.display = "block";
        setTimeout(freddyTeleport, tempTpFreddy);
    }
    
    console.log("Freddy teleportado para sala "+ nFreddy);
}
    
function ataqueFreddy(){
    if(nFreddy == 2 && duto1Ocupado == false){
        // duto1Ocupado = true;
        // freddyChega(1);
        freddyTeleport();
    }else if(nFreddy == 4 && portaOcupada == false){
        portaOcupada = true;
        freddyChega(0);
        freddyLocal = "porta";
    }else if(nFreddy == 3 && duto2Ocupado == false){
        // duto2Ocupado = true;
        // freddyChega(2);
        freddyTeleport();
    }else{
        freddyTeleport();
    }
}
