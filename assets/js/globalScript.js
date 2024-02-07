const state = {
    view:{
        animatronicFront: document.querySelector(".animC"),
        animatronicEsq: document.querySelector(".animDE"),
        animatronicDir: document.querySelector(".animDD"),
        luz: document.querySelector(".luz"),
        luzCor: ["#000000", "#00000031", "#000000", "#00000031", "#000000", "#000000", "#00000031", "#000000", "#00000031", "#000000", "#00000031", "#000000", "#000000", "#00000031"],
        animPng:{
            chica: './assets/img/chica.png',
            chica2: './assets/img/chicaDuto.png',
            bonnie: './assets/img/bonnie.png',
            bonnie2: './assets/img/bonnieDuto.png',
            foxy: './assets/img/foxy.png',
            freddy: './assets/img/freddy.png',
            golden: '.assets/img/golden-freddy.png'
        },
        porta: document.querySelector(".paredeFrontal .porta"),
        btnFecharPorta: document.querySelector(".paredeFrontal .botoes .btnPorta"),
        btnLuzPorta: document.querySelector(".paredeFrontal .botoes .btnLuz"),
        btnFecharDutoD: document.querySelector(".paredeDireita .botoes .btnPorta"),
        btnLuzDutoD: document.querySelector(".paredeDireita .botoes .btnLuz"),
        btnFecharDutoE: document.querySelector(".paredeEsquerda .botoes .btnPorta"),
        btnLuzDutoE: document.querySelector(".paredeEsquerda .botoes .btnLuz"),
    },
    values:{
        noite: 1,
        bateria: 100
    },
    config:{
        volume: 50,
        tamanhoDaTela: 1
    },
    functions:{
        picoDeLuz(){
            let i = 0;
            let intervalo = setInterval(()=>{
                state.view.luz.style.background = state.view.luzCor[i];
                i++;
                
            }, 100)
            setTimeout(()=>{
                clearInterval(intervalo);
            }, 3000)
        },
        fecharPorta(){
            state.view.porta.style.top = 0;
            sounds.somPortaFechando.play();
        }
    }
}

const sounds = {
    somAmbiente: new Audio('./assets/audio/ruidobranco.m4a'),
    somCorredor: new Audio('./assets/audio/correndoNoCorredor.m4a'),
    somDutoD: new Audio('./assets/audio/correndoNoDuto.m4a'),
    somDutoE: new Audio('./assets/audio/correndoNoDuto.m4a'),
    somPortaAbrindo: new Audio('./assets/audio/abrindo.m4a'),
    somPortaFechando: new Audio('.assets/audio/portaFechando.m4a'),
    phoneguy(noite){
        let audio = new Audio(`./assets/audio/phoneguy${noite}.m4a`);
        return audio;
    }
}

const chica = {
    png1: state.view.animPng.chica,
    png2: state.view.animPng.chica2,
    active: false,
    nChica: null,
}

function start(){
    state.view.btnFecharPorta.addEventListener('click', ()=>{state.functions.fecharPorta()});
    sounds.somAmbiente.play();
    sounds.phoneguy(state.values.noite).play();
    sounds.somPortaFechando.play();
}