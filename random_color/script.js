// bouton RGB Color

let btnRgb = document.getElementById("btn_rgb");
btnRgb.addEventListener('click', fonctionBtnRgb);

let valeurRgb = document.getElementById("valeur_rgb");

function fonctionBtnRgb(){
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);

    let final = "rgb(" + random1 + "," + random2 + "," + random3 + ")";
    
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


document.body.style.backgroundColor = fonctionBtn(6);
valeur.innerText = fonctionBtn(6)

function functionReload(){
    window.location.replace("https://hakimoss.github.io/random_color/index.html")
}

// random box


let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 2);
    
    if (random_box_math === 1){
        window.open("https://hakimoss.github.io/random_image/index.html", "_self")
    } else {
        window.open("https://hakimoss.github.io/random_color/index.html", "_self")
    }
}


