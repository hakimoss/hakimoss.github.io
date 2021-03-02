// bouton RGB Color

let btnRgb = document.getElementById("btn_rgb");
btnRgb.addEventListener('click', fonctionBtnRgb);

let valeurRgb = document.getElementById("valeur_rgb");

function fonctionBtnRgb(){
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    let final = "rgb(" + random1 + "," + random2 + "," + random3 + ")";
    valeur.innerText = "Hex color"
    document.body.style.backgroundColor = final;
    valeurRgb.innerText = final;
    
}



// bouton Hex color

let btn = document.getElementById("btn_hex");
btn.addEventListener('click', functionReload);

let valeur = document.getElementById("valeur_hex");

function fonctionBtn(length = 6){
   
    let chart = "ABCDEF0123456789";
    let str = "";
    let chartLength = chart.length;

    for (let i = 0; i < length; i++){
        str += chart.charAt(Math.floor(Math.random() * chartLength))
        
    }  
    return "#" + str;
    
}

let hexresult = fonctionBtn(6);

document.body.style.backgroundColor = hexresult;
valeur.innerText = hexresult;

function functionReload(){
    window.location.replace("https://hakimoss.github.io/random_color/index.html")
}
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


