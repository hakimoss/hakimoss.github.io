// btn random image

let btnRandomImage = document.getElementById("btn_random_image");
btnRandomImage.addEventListener("click", functionReload)

let btnNoirBlanc = document.getElementById("grayscale_box");
btnNoirBlanc.addEventListener("click", functionNoireBlanc)

let largeur = window.innerWidth;
let hauteur = window.innerHeight;





function functionNoireBlanc(){
    document.body.style.backgroundImage = `url('https://picsum.photos/${largeur}/${hauteur}?grayscale)`
    window.location.replace("https://hakimoss.github.io/random_image/index.html")
    
}


function functionReload(){ 
    window.location.replace("https://hakimoss.github.io/random_image/index.html")
}

document.body.style.backgroundImage = `url('https://picsum.photos/${largeur}/${hauteur}')`

/// btn random-box

let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 5);
    
    if (random_box_math === 0){
        window.location.replace("https://hakimoss.github.io/random_image/index.html")
    } else if (random_box_math === 1) {
        window.location.replace("https://hakimoss.github.io/random_color/index.html")
    } else if (random_box_math === 2){
        window.location.replace("https://hakimoss.github.io/random_position/index.html")
    } else if (random_box_math === 3) {
        window.location.replace("https://hakimoss.github.io/random_dice/index.html")
    } else {
        window.location.replace("https://hakimoss.github.io/random_password/index.html")
    }
}


// bouton retour

let btnRetour = document.getElementById("btn_retour");
btnRetour.addEventListener('click', btnRetourFunction)

function btnRetourFunction(){
    window.location.replace("https://hakimoss.github.io/")
}
