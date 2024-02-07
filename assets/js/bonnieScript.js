let tempTpBonnie = 10000;
let bonnieLocal = "none";
let nBonnie;

let bonnieAtivo = false;

let timeAtaqueBonnie;

const bonnieSala1 = document.querySelector(".sala1 .bonnie");
const bonnieSala2 = document.querySelector(".sala2 .bonnie");
const bonnieSala3 = document.querySelector(".sala3 .bonnie");
const bonnieSala4 = document.querySelector(".sala4 .bonnie");
const bonnieSala5 = document.querySelector(".sala5 .bonnie");

function ativarBonnie(){
    bonnieAtivo = true;
    bonnieTeleport();
}

function bonnieChega(id){
    


    picoDeEnergia();
    if(id == 0){
        bonnieSala1.style.display = "none";
        bonnieSala2.style.display = "none";
        bonnieSala3.style.display = "none";
        bonnieSala4.style.display = "none";
        bonnieSala5.style.display = "none";
        portaFrontal.style.backgroundImage = "url('assets/img/bonnie.png')";
        setTimeout(detectarKillBonnie, 10000);
    }else if(id == 1){
        bonnieSala1.style.display = "none";
        bonnieSala2.style.display = "none";
        bonnieSala3.style.display = "none";
        bonnieSala4.style.display = "none";
        bonnieSala5.style.display = "none";
        dutoEsquerdo.style.backgroundImage = "url('assets/img/bonnieDuto.png')";
        setTimeout(detectarKillBonnie, 10000);
    }else if(id == 2){
        bonnieSala1.style.display = "none";
        bonnieSala2.style.display = "none";
        bonnieSala3.style.display = "none";
        bonnieSala4.style.display = "none";
        bonnieSala5.style.display = "none";
        dutoDireito.style.backgroundImage = "url('assets/img/bonnieDuto.png')";
        setTimeout(detectarKillBonnie, 10000);
    }
    
    
    setTimeout(detectarKillBonnie, 10000);
    console.log("atackBonnieIniciado")
}


function detectarKillBonnie(){
    const animatronicDutoDireito = document.querySelector(".duto2 .animatronicDuto");
    const animatronicDutoEsquerdo = document.querySelector(".duto1 .animatronicDuto");
    const animatronicPorta = document.querySelector(".animatronicNaPorta");
    
    
    if(bonnieLocal == "porta" && bonnieAtivo == true){
        if(porta0 == true){
            console.log("Bonnie Saiu do " + bonnieLocal);
            animatronicPorta.style.backgroundImage = "none"
            bonnieTeleport();
            bonnieLocal = "none";
            portaOcupada = false;
        }else if(porta0 == false && bonnieAtivo == true){
            portaFrontal.style.backgroundImage = "none"
            bonnieKill();
        }
    }else if(bonnieLocal == "duto1" && bonnieAtivo == true){
        if(duto1 == true){
            console.log("Bonnie Saiu do " + bonnieLocal);
            bonnieLocal = "none";
            duto1Ocupado = false;
            dutoEsquerdo.style.backgroundImage = "none"
            bonnieTeleport();
        }else if(duto1 == false && bonnieAtivo == true){
            dutoEsquerdo.style.backgroundImage = "none"
            bonnieKill();
        }
    }else if(bonnieLocal == "duto2" && bonnieAtivo == true){
        if(duto2 == true && bonnieAtivo == true){
            console.log("Bonnie Saiu do " + bonnieLocal);
            animatronicDutoDireito.style.backgroundImage = "none"
            bonnieLocal = "none";
            duto2Ocupado = false;
            dutoDireito.style.backgroundImage = "none"
            bonnieTeleport();
        }else if(duto2 == false && bonnieAtivo == true){
            dutoDireito.style.backgroundImage = "none"
            bonnieKill();
        }
    }

}

function bonnieKill(){
    const somGrito = document.getElementById("grito");
    const jumpscare = document.querySelector(".areajunpscare");
    somGrito.addEventListener('ended', ()=>{
        encerrarPartida();
    })
    somGrito.play();
    jumpscare.style.backgroundImage = "url('assets/img/bonniejumpscare.gif')";
}

function bonnieTeleport(){
    nBonnie = numeroAleatorio(1, 5);
    

    if(nBonnie == 1 && bonnieAtivo == true){
        bonnieSala1.style.display = "block";
        bonnieSala2.style.display = "none";
        bonnieSala3.style.display = "none";
        bonnieSala4.style.display = "none";
        bonnieSala5.style.display = "none";
        setTimeout(bonnieTeleport, tempTpBonnie);
    }else if(nBonnie == 2 && bonnieAtivo == true){
        bonnieSala1.style.display = "none";
        bonnieSala2.style.display = "block";
        bonnieSala3.style.display = "none";
        bonnieSala4.style.display = "none";
        bonnieSala5.style.display = "none";
        setTimeout(ataqueBonnie, tempTpBonnie);
    }else if(nBonnie == 3 && bonnieAtivo == true){
        bonnieSala1.style.display = "none";
        bonnieSala2.style.display = "none";
        bonnieSala3.style.display = "block";
        bonnieSala4.style.display = "none";
        bonnieSala5.style.display = "none";
        setTimeout(ataqueBonnie, tempTpBonnie);
    }else if(nBonnie == 4 && bonnieAtivo == true){
        bonnieSala1.style.display = "none";
        bonnieSala2.style.display = "none";
        bonnieSala3.style.display = "none";
        bonnieSala4.style.display = "block";
        bonnieSala5.style.display = "none";
        setTimeout(ataqueBonnie, tempTpBonnie);
    }else if(nBonnie == 5 && bonnieAtivo == true){
        bonnieSala1.style.display = "none";
        bonnieSala2.style.display = "none";
        bonnieSala3.style.display = "none";
        bonnieSala4.style.display = "none";
        bonnieSala5.style.display = "block";
        setTimeout(bonnieTeleport, tempTpBonnie);
    }
    
    console.log("Bonnie teleportado para sala "+ nBonnie);
}

function ataqueBonnie(){
    const audioDuto = document.getElementById("somDuto");
    const audioPorta = document.getElementById("somCorredor");
    if(nBonnie == 2 && duto1Ocupado == false && bonnieAtivo == true){
        duto1Ocupado = true;
        
        audioDuto.addEventListener('ended', function(){
            bonnieChega(1);
            
        })
        bonnieLocal = "duto1";
        bonnieSala2.style.display = "none";
        audioDuto.play()
        
    }else if(nBonnie == 4 && portaOcupada == false && bonnieAtivo == true){
        portaOcupada = true;
        bonnieLocal = "porta";
        audioPorta.play();
        bonnieChega(0);
        
    }else if(nBonnie == 3 && duto2Ocupado == false && bonnieAtivo == true){
        duto2Ocupado = true;
        
        audioDuto.addEventListener('ended', function(){
            bonnieChega(2);
            
        })
        bonnieLocal = "duto2";
        bonnieSala3.style.display = "none";
        audioDuto.play()
        
    }else{
        bonnieTeleport();
    }
}
