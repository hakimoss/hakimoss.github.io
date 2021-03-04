// btn random image

let btnRandomImage = document.getElementById("btn_random_image").addEventListener("click", functionNormal);
let btnNoirBlanc = document.getElementById("grayscale_box").addEventListener("click", functionNoireBlanc);
let btnBlur = document.getElementById("blur_box").addEventListener("click", functionBlur);

let largeur = window.innerWidth;
let hauteur = window.innerHeight;
let nouvImage = document.body
let nouvUrl = "https://picsum.photos/" + largeur + "/" + hauteur
nouvImage.style.backgroundImage = `url(${nouvUrl})`




function functionBlur(){
    largeur = window.innerWidth++;
    hauteur = window.innerHeight++;
    nouvImage = document.body
    nouvUrl = "https://picsum.photos/" + largeur + "/" + hauteur + "?blur"
    nouvImage.style.backgroundImage = `url(${nouvUrl})`
 
}


function functionNoireBlanc(){
    largeur = window.innerWidth++;
    hauteur = window.innerHeight++;
    nouvImage = document.body
    nouvUrl = "https://picsum.photos/" + largeur + "/" + hauteur + "?grayscale"
    nouvImage.style.backgroundImage = `url(${nouvUrl})`
    
}


function functionNormal(){ 
    largeur = window.innerWidth++;
    hauteur = window.innerHeight++;
    nouvImage = document.body
    nouvUrl = "https://picsum.photos/" + largeur + "/" + hauteur
    nouvImage.style.backgroundImage = `url(${nouvUrl})`
    
}

/// btn random-box

let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 6);
    
    if (random_box_math === 0){
        window.location.replace("https://hakimoss.github.io/random_image/index.html")
    } else if (random_box_math === 1) {
        window.location.replace("https://hakimoss.github.io/random_color/index.html")
    } else if (random_box_math === 2){
        window.location.replace("https://hakimoss.github.io/random_position/index.html")
    } else if (random_box_math === 3) {
        window.location.replace("https://hakimoss.github.io/random_dice/index.html")
    } else if(random_box_math === 4) {
        window.location.replace("https://hakimoss.github.io/random_password/index.html")
    } else {
        window.location.replace("https://hakimoss.github.io/random_idle/index.html")
    }
}


// bouton retour

let btnRetour = document.getElementById("btn_retour");
btnRetour.addEventListener('click', btnRetourFunction)

function btnRetourFunction(){
    window.location.replace("https://hakimoss.github.io/")
}
