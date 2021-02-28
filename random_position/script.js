
/// btn random-position


let btnRandomPosition = document.getElementById("btn_random_position");
btnRandomPosition.addEventListener('click', functionRandomPosition);

let largeur = window.innerWidth;
let hauteur = window.innerHeight;


function functionRandomPosition(){

    if(navigator.appName == "Microsoft Internet Explorer"){
        var x = event.x+document.body.scrollLeft;
        var y = event.y+document.body.scrollTop;
    } else {
        var x = event.pageX;  
        var y = event.pageY;      
    }
    let random1 = Math.floor(Math.random() * hauteur);
    let random2 = Math.floor(Math.random() * largeur);
    let random3 = Math.floor(Math.random() * 2);

    let direction = "";

    if(random3 == 1){
        direction = "+";
    } else {
        direction = "-"
    }
    

    document.getElementById("btn_random_position").style.left = (direction, random2)+'px';
    document.getElementById("btn_random_position").style.top = (direction, random1)+'px';

}



/// btn random-box

let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 3);
    
    if (random_box_math === 0){
        window.location.replace("https://hakimoss.github.io/random_image/index.html")
    } else if (random_box_math === 1) {
        window.location.replace("https://hakimoss.github.io/random_color/index.html")
    } else {
        window.location.replace("https://hakimoss.github.io/random_position/index.html")
    }
}


// bouton retour

let btnRetour = document.getElementById("btn_retour");
btnRetour.addEventListener('click', btnRetourFunction)

function btnRetourFunction(){
    window.location.replace("https://hakimoss.github.io/")
}


