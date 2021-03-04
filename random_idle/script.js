
point = 0;

function animationDebut(){
    $("h2").text("Bienvenue chere aventurier !")
    $("h2").animate({top: '+=200px', opacity: 1},2000)
    
    
}



animationDebut()



//                  bouton principal

$("#btn_clicker").click(function(){
  


    point++;
   
    score = $("#score").html(point)
    
    console.log(point)

    if(point === 50){
        $("h2").text("Génial 50pts tu peu maintenant utiliser le gold generateur")
        
        $("#autoGold").css("visibility", "visible")
    }
    
    if(point === 5){
        $("h2").text("Essait d'atteindre les 50pts, j'te reserver une surprise")
        
    }

})

//                  generateur auto gold

let generateGold;

$("#autoGold").click(function AutoGold() {
    if(point >= 50){
        generateGold = setInterval(autoGold, 1000);
    }
})
   
function autoGold() {
    
        point++
        $("#score").html(+point)
    
 
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


