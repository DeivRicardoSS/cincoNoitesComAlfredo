let tempTpChica = 10000;
let chicaLocal = "none";
let timeAtaqueChica;

let nChica;

let chicaAtivo = false;

const chicaSala1 = document.querySelector(".sala1 .chica");
const chicaSala2 = document.querySelector(".sala2 .chica");
const chicaSala3 = document.querySelector(".sala3 .chica");
const chicaSala4 = document.querySelector(".sala4 .chica");
const chicaSala5 = document.querySelector(".sala5 .chica");

function ativarChica(){
    chicaAtivo = true;
    chicaTeleport();
}

function chicaChega(id){

    

    picoDeEnergia();
    if(id == 0){
        chicaSala1.style.display = "none";
        chicaSala2.style.display = "none";
        chicaSala3.style.display = "none";
        chicaSala4.style.display = "none";
        chicaSala5.style.display = "none";
        portaFrontal.style.backgroundImage = "url('assets/img/chica.png')";
        setTimeout(detectarKillChica, 10000);
    }else if(id == 1){
        chicaSala1.style.display = "none";
        chicaSala2.style.display = "none";
        chicaSala3.style.display = "none";
        chicaSala4.style.display = "none";
        chicaSala5.style.display = "none";
        dutoEsquerdo.style.backgroundImage = "url('assets/img/chicaDuto.png')";
        setTimeout(detectarKillChica, 10000);
    }else if(id == 2){
        chicaSala1.style.display = "none";
        chicaSala2.style.display = "none";
        chicaSala3.style.display = "none";
        chicaSala4.style.display = "none";
        chicaSala5.style.display = "none";
        dutoDireito.style.backgroundImage = "url('assets/img/chicaDuto.png')";
        setTimeout(detectarKillChica, 10000);
    }
    
}



function detectarKillChica(){

    console.log(chicaLocal)
    
    if(chicaLocal == "porta" && chicaAtivo == true){
        if(porta0 == true && chicaAtivo == true){
            console.log("Chica Saiu do " + chicaLocal);
            portaFrontal.style.backgroundImage = "none"
            chicaTeleport();
            portaOcupada = false;
            chicaLocal = "none";
        }else if(porta0 == false && chicaAtivo == true){
            animatronicPorta.style.backgroundImage = "none"
            chicaKill();
        }
    }else if(chicaLocal == "duto1" && chicaAtivo == true){
        if(duto1 == true && chicaAtivo == true){
            console.log("Chica Saiu do " + chicaLocal);
            chicaLocal = "none";
            duto1Ocupado = false;
            dutoEsquerdo.style.backgroundImage = "none"
            chicaTeleport();
        }else if(duto1 == false && chicaAtivo == true){
            dutoEsquerdo.style.backgroundImage = "none"
            chicaKill();
        }
    }else if(chicaLocal == "duto2" && chicaAtivo == true){
        if(duto2 == true && chicaAtivo == true){
            console.log("Chica Saiu do " + chicaLocal);
            chicaLocal = "none";
            duto2Ocupado = false;
            dutoDireito.style.backgroundImage = "none"
            chicaTeleport();
        }else if(duto2 == false && chicaAtivo == true){
            dutoDireito.style.backgroundImage = "none"
            chicaKill();
        }
    }

}

function chicaKill(){
    const somGrito = document.getElementById("grito");
    const jumpscare = document.querySelector(".areajunpscare");
    somGrito.addEventListener('ended', ()=>{
        encerrarPartida();
    })
    somGrito.play();
    jumpscare.style.backgroundImage = "url('assets/img/chicajumpscare.gif')";
}

function chicaTeleport(){
    nChica = numeroAleatorio(1, 5);
    

    if(nChica == 1 && chicaAtivo == true){
        chicaSala1.style.display = "block";
        chicaSala2.style.display = "none";
        chicaSala3.style.display = "none";
        chicaSala4.style.display = "none";
        chicaSala5.style.display = "none";
        setTimeout(chicaTeleport, tempTpChica);
    }else if(nChica == 2 && chicaAtivo == true){
        chicaSala1.style.display = "none";
        chicaSala2.style.display = "block";
        chicaSala3.style.display = "none";
        chicaSala4.style.display = "none";
        chicaSala5.style.display = "none";
        setTimeout(ataqueChica, tempTpChica);
    }else if(nChica == 3 && chicaAtivo == true){
        chicaSala1.style.display = "none";
        chicaSala2.style.display = "none";
        chicaSala3.style.display = "block";
        chicaSala4.style.display = "none";
        chicaSala5.style.display = "none";
        setTimeout(ataqueChica, tempTpChica);
    }else if(nChica == 4 && chicaAtivo == true){
        chicaSala1.style.display = "none";
        chicaSala2.style.display = "none";
        chicaSala3.style.display = "none";
        chicaSala4.style.display = "block";
        chicaSala5.style.display = "none";
        setTimeout(ataqueChica, tempTpChica);
    }else if(nChica == 5 && chicaAtivo == true){
        chicaSala1.style.display = "none";
        chicaSala2.style.display = "none";
        chicaSala3.style.display = "none";
        chicaSala4.style.display = "none";
        chicaSala5.style.display = "block";
        setTimeout(chicaTeleport, tempTpChica);
    }
    
    console.log("Chica teleportado para sala "+ nChica);
}
    
function ataqueChica(){
    const audioDuto = document.getElementById("somDuto");
    const audioPorta = document.getElementById("somCorredor");
    if(nChica == 2 && duto1Ocupado == false  && chicaAtivo == true){
        duto1Ocupado = true;
        
        audioDuto.addEventListener('ended', function(){
            chicaChega(1);
            
        })
        chicaLocal = "duto1";
        chicaSala2.style.display = "none";
        audioDuto.play()
        
        
        
        
    }else if(nChica == 4 && portaOcupada == false  && chicaAtivo == true){
        portaOcupada = true;
        chicaLocal = "porta";
        audioPorta.play();
        chicaChega(0);
        
    }else if(nChica == 3 && duto2Ocupado == false  && chicaAtivo == true){
        duto2Ocupado = true;
        audioDuto.addEventListener('ended', function(){
            chicaChega(2);
            
        })
        chicaLocal = "duto2";
        chicaSala3.style.display = "none";
        audioDuto.play()
        
    }else{
        chicaTeleport();
    }
}