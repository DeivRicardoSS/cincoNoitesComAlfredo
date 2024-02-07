let startGame = false;

//phoneguy
const audioPhoneGuy1 = document.getElementById("pgy1");
const audioPhoneGuy2 = document.getElementById("pgy2");
const audioPhoneGuy3 = document.getElementById("pgy3");
const audioPhoneGuy4 = document.getElementById("pgy4");
const audioPhoneGuy5 = document.getElementById("pgy5");

//bateria
let bateria = 100;
//noite
window.noite = 1;

//relógio
let hora = 0;
let minuto = 0;
let temp;
let tempBateria;

//portas
let porta0 = false;
let duto1 = false;
let duto2 = false;

//entradas
let portaOcupada = false;
let duto1Ocupado = false;
let duto2Ocupado = false;

//camera
let menuCamera = false;

//musica
const menuMusic = document.getElementById("audioMenu");

const portaFrontal = document.querySelector(".animatronicNaPorta");
const dutoEsquerdo = document.querySelector(".duto1 .animatronicDuto");
const dutoDireito = document.querySelector(".duto2 .animatronicDuto");



function playGame(reset){
    startGame = true;
    resetarAnimatronics();
    if(reset == 'reset'){
        noite = 1;
    }
    if(noite == 1){
        tempTpBonnie = 20000;
        tempTpChica = 21000;
        tempTpFreddy = 22000;
    }else if(noite == 2){
        tempTpBonnie = 20000;
        tempTpChica = 21000;
        tempTpFreddy = 22000;
    }else if(noite == 3){
        tempTpBonnie = 20000;
        tempTpChica = 21000;
        tempTpFreddy = 22000;
    }else if(noite == 4){
        tempTpBonnie = 20000;
        tempTpChica = 21000;
        tempTpFreddy = 22000;
    }else if(noite == 5){
        tempTpBonnie = 20000;
        tempTpChica = 21000;
        tempTpFreddy = 22000;
    }
    menuMusic.pause();
    setTimeout(function(){
        picoDeEnergia();
        if(noite == 1){
            audioPhoneGuy1.play();
        }else if(noite == 2){
            audioPhoneGuy2.play();
        }else if(noite == 3){
            audioPhoneGuy3.play();
        }else if(noite == 4){
            audioPhoneGuy4.play();
        }else if(noite == 5){
            audioPhoneGuy5.play();
        }
    }, 3000)
    
    const avisoNoite = document.querySelector(".qnoites");
    const menuInicial = document.querySelector(".menuInicial");
    const gameplay = document.querySelector(".gameplay");
    const avisos = document.querySelector(".aviso");
    const avisosContent = document.querySelector(".aviso h1");
    const ambient = document.getElementById("ambient");
    menuInicial.style.display = "none";
    gameplay.style.display = "block";
    avisoNoite.innerHTML = `${noite}`;
    setTimeout(function(){
        avisos.style.backgroundColor = "transparent";
        avisosContent.style.color = "transparent";
        hora = 0;
        minuto = 0;
        temp = setInterval(relogio, 1000)
    },2000)

    
    ambient.play();
    habilitarMecanicaLuzPorta();
    habilitarMecanicaLuzDutoDireito();
    habilitarMecanicaLuzDutoEsquerdo();
    
}

function compararBateria(){
    const visualBateria = document.querySelector(".carga");
    visualBateria.style.width = " "+bateria+"%";
    if(bateria <= 0){
        abrirPorta(0);
        abrirPorta(1);
        abrirPorta(2);
        semEnergia();
    }
    
}

function quedaDeBateria(){
    bateria-=0.25;
    compararBateria();
}

function verificarCamera(){
    let t
    if(menuCamera == false){
        tempBateria = setInterval(quedaDeBateria, 1000);
        menuCamera = true;
        clearInterval(t);
        nFoxy = 0;
    }else{
        clearInterval(tempBateria);

        t = setInterval(()=>{
            nFoxy++;
            if(nFoxy == 10 && startGame == true){
                ativarFoxy();
                nFoxy = 0;
            }
        }, 2000)
    }
}

function gerenciarPorta(id){
    const efeitoSonoro = document.getElementById("abrirPorta");
    const efeitoSonoro2 = document.getElementById("fecharPorta");
    if(id == 0){
        const porta = document.querySelector(".porta .ferro");
        
        if(porta0 == true){
            
        
            porta.style.height = "0%";
            efeitoSonoro.play();
            if(porta0 == true){
                clearInterval(tempBateria);
            }
            porta0 = false;
        }else{
            if(bateria>0){
                if(porta0 == false){
                    porta.style.height = "100%";
                    efeitoSonoro.play();
                    porta0 = true;
                    tempBateria = setInterval(quedaDeBateria, 1000);
                }
                
            }
        }
              
        
    }else if(id == 1){
        const porta = document.querySelector(".duto1 .ferro");
        
        if(duto1 == true){
            porta.style.height = "0%";
            efeitoSonoro.play();
            if(duto1 == true){
                clearInterval(tempBateria);
            }
            duto1 = false;
        }else{
            if(bateria>0){
                if(duto1 == false){
                    porta.style.height = "100%";
                    efeitoSonoro.play();
                    duto1 = true;
                    tempBateria = setInterval(quedaDeBateria, 1000);
                }
                
            }
        }
        
        
        
    }else if(id == 2){
        const porta = document.querySelector(".duto2 .ferro");
        
        if(duto2 == true){
            porta.style.height = "0%";
            efeitoSonoro.play();
            if(duto2 == true){
              clearInterval(tempBateria);
            }
            duto2 = false;
        }else{
            if(bateria>0){
                if(duto2 == false){
                    porta.style.height = "100%";
                    efeitoSonoro.play();
                    duto2 = true;
                    tempBateria = setInterval(quedaDeBateria, 1000);
                }
                
            }
        }
        
        
    }
     
}

function habilitarMecanicaLuzPorta(){
    const btnLight = document.querySelector("#light1");
    const entrada = document.querySelector(".porta")
    const animatronic = document.querySelector(".animatronicNaPorta");
    btnLight.addEventListener('mousedown', function(){
        if(bateria > 0){
            entrada.style.backgroundImage = "url(assets/img/porta.png)"
            tempBateria = setInterval(quedaDeBateria, 1000);
            animatronic.style.display = 'block';
        }
        
    });
    btnLight.addEventListener('mouseup', function(){
        entrada.style.backgroundImage = "url(assets/img/portaApagada.png)"
        clearInterval(tempBateria);
        animatronic.style.display = 'none';
    });
}

function habilitarMecanicaLuzDutoEsquerdo(){
    const btnLight2 = document.querySelector("#light2");
    const entrada2 = document.querySelector(".duto1")
    const animatronic = document.querySelector(".duto1 .animatronicDuto");
    btnLight2.addEventListener('mousedown', function(){
        if(bateria > 0){
            entrada2.style.backgroundImage = "url(assets/img/duto.png)"
            tempBateria = setInterval(quedaDeBateria, 1000);
            animatronic.style.display = 'block';
        }
        
    });
    btnLight2.addEventListener('mouseup', function(){
        entrada2.style.backgroundImage = "";
        clearInterval(tempBateria);
        animatronic.style.display = 'none';
    });
}

function habilitarMecanicaLuzDutoDireito(){
    const btnLight3 = document.querySelector("#light3");
    const entrada3 = document.querySelector(".duto2")
    const animatronic = document.querySelector(".duto2 .animatronicDuto");
    btnLight3.addEventListener('mousedown', function(){
        if(bateria > 0){
            entrada3.style.backgroundImage = "url(assets/img/duto.png)"
            tempBateria = setInterval(quedaDeBateria, 1000);
            animatronic.style.display = 'block';
        }
        
    });
    btnLight3.addEventListener('mouseup', function(){
        entrada3.style.backgroundImage = "";
        clearInterval(tempBateria);
        animatronic.style.display = 'none';
    });
}

function picoDeEnergia(){
    let cores = ["#000000", "#00000031", "#000000", "#00000031", "#000000", "#000000", "#00000031", "#000000", "#00000031", "#000000", "#00000031", "#000000", "#000000", "#00000031"];

    const luz = document.querySelector(".luz");
    let i = 0

    setInterval(function(){
        
            luz.style.background = cores[i];
            i = (i+1);
            //%cores.length
        
    }, 100);

    
}

function relogio(){
    const relogio = document.querySelector(".relogio");
    minuto++;
    compararBateria();
    
    if(minuto == 60){
        minuto = 0;
        hora++;
        
        
        
        if(hora == 6){
            
            ganhouPartida()
            clearInterval(temp)
            
            
        }
    }

    if(noite == 1){
        if(hora == 3 && minuto == 30){
            ativarBonnie();
        }
        if(hora == 3 && minuto == 20){
            ativarChica();
        }
        if(hora == 4 && minuto == 10){
            ativarFreddy();
        }
    }

    if(noite == 2){
        if(hora == 2 && minuto == 30){
            ativarBonnie();
            ativarFoxy();
        }
        if(hora == 2 && minuto == 20){
            ativarChica();
        }
        if(hora == 4 && minuto == 10){
            ativarFreddy();
        }
    }

    if(noite == 3){
        if(hora == 1 && minuto == 30){
            ativarBonnie();
            ativarFoxy();
        }
        if(hora == 1 && minuto == 20){
            ativarChica();
        }
        if(hora == 4 && minuto == 10){
            freddyTeleport();
        }
    }

    if(noite == 4){
        if(hora == 0 && minuto == 30){
            ativarBonnie();
        }
        if(hora == 0 && minuto == 20){
            ativarChica();
        }
        if(hora == 4 && minuto == 10){
            ativarFreddy();
        }
    }

    if(noite == 5){
        if(hora == 0 && minuto == 30){
            ativarBonnie();
        }
        if(hora == 0 && minuto == 20){
            ativarChica();
        }
        if(hora == 3 && minuto == 10){
            ativarFreddy();
        }
    }

   

    relogio.innerHTML = `${hora}:${minuto.toLocaleString('pt-br', {minimumIntegerDigits:2})}`;
}

function encerrarPartida(){
    startGame = false;
    const menuInicial = document.querySelector(".menuInicial");
    const gameplay = document.querySelector(".gameplay");
    const avisos = document.querySelector(".aviso");
    const avisosContent = document.querySelector(".aviso h1");
    const ambient = document.getElementById("ambient");
    const jumpscare = document.querySelector(".areajunpscare");
    ambient.pause();
    clearTimeout(chicaTeleport);
    clearTimeout(ataqueChica);
    clearTimeout(detectarKillChica);
    jumpscare.style.backgroundImage = "url()";
    
    resetarAnimatronics();

    menuInicial.style.display = "flex";
    gameplay.style.display = "none";
    avisos.style.backgroundColor = "black";
    avisosContent.style.color = "white";

    bateria = 100;
    compararBateria();
    clearInterval(temp);
}

function ganhouPartida(){
    const noche = document.getElementById("noche");
    const somMusica = document.getElementById("musica");
    const somEnergia = document.getElementById("faltaDeEnergia");
    const efeitoSonoro = document.getElementById("vitoria");
    const audioDuto = document.getElementById("somDuto");
    somEnergia.pause();
    somEnergia.currentTime = 0;
    somMusica.pause();
    somMusica.currentTime = 0;
    audioDuto.pause();

    hora = 0;
    console.log("hora resetada")
    minuto = 0;
    console.log("minuto resetado")
    noite++;
    console.log("proxima noite")
    bateria = 100;
    compararBateria()
    console.log("bateria resetada")
    resetarAnimatronics()
    efeitoSonoro.play();
    encerrarPartida();
    menuMusic.play();
    noche.innerHTML = `Noche ${noite}`;
}



//math
function numeroAleatorio(min, max){
    let n1 = parseInt(Math.random()* (max+1));
    while(n1 < min || n1 > max){
        n1 = parseInt(Math.random()* (max+1));
    }
    return n1;
}

function resetarAnimatronics(){
    bonnieAtivo = false;
    freddyAtivo = false;
    chicaAtivo = false;
    
    clearTimeout(chicaTeleport);
    clearTimeout(ataqueChica);
    clearTimeout(chicaChega);
    clearTimeout(detectarKillChica);

    clearTimeout(chicaTeleport);
    clearTimeout(ataqueChica);
    clearTimeout(chicaChega);
    clearTimeout(detectarKillChica);
    
    
    chicaSala1.style.display = "block";
    chicaSala2.style.display = "none";
    chicaSala3.style.display = "none";
    chicaSala4.style.display = "none";
    chicaSala5.style.display = "none";
    
    clearInterval(bonnieTeleport);
    clearTimeout(ataqueBonnie);
    clearTimeout(bonnieChega);
    clearInterval(detectarKillBonnie);

    clearInterval(bonnieTeleport);
    clearTimeout(ataqueBonnie);
    clearTimeout(bonnieChega);
    clearInterval(detectarKillBonnie);
    
    bonnieSala1.style.display = "block";
    bonnieSala2.style.display = "none";
    bonnieSala3.style.display = "none";
    bonnieSala4.style.display = "none";
    bonnieSala5.style.display = "none";

    clearInterval(freddyTeleport);
    clearTimeout(ataqueFreddy);
    clearInterval(detectarKillFreddy);
    clearTimeout(freddyChega);
    
    freddySala1.style.display = "block";
    freddySala2.style.display = "none";
    freddySala3.style.display = "none";
    freddySala4.style.display = "none";
    freddySala5.style.display = "none";
    
}