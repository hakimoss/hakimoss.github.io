
let btnRandomDice = document.getElementById("btn_random_dice");
btnRandomDice.addEventListener('click', randomNumber)

let resultat = document.getElementById("resultat");


function randomNumber(){
    let valeurFace = document.getElementById("valeur_dice").value;
    let random1 = Math.floor(Math.random() * valeurFace);
    resultat.textContent = random1 + 1;

    if (valeurFace <= 1){
        resultat.textContent = "Veuillez indiquer au moin 2 faces"
    }
}



/// btn random-box

let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 9);
    
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
    } else if(random_box_math === 5){
        window.location.replace("https://hakimoss.github.io/random_idle/index.html")
    } else if (random_box_math === 6){
        window.location.replace("https://hakimoss.github.io/random_flag/index.html")
    } else if (random_box_math === 7){
        window.location.replace("https://hakimoss.github.io/random_currency/index.html")
    } else {
        window.location.replace("https://hakimoss.github.io/random_alert/index.html")
    }
}


// bouton retour

let btnRetour = document.getElementById("btn_retour");
btnRetour.addEventListener('click', btnRetourFunction)

function btnRetourFunction(){
    window.location.replace("https://hakimoss.github.io/")
}
