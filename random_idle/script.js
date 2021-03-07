
let point = 0;

let clickCompteur = 0;

let prix = 50;

let pointParClick = 1;

let prixClicker = 200;

let prixUpgrade = 200;

let imageUrl1 = "image_gazon/gaz_niv1.png";

let imageUrl2 = "image_gazon/gaz_niv2.png";

let imageUrl3 = "image_gazon/gaz_niv3.png";

let imageUrl4 = "image_gazon/gaz_niv4.png";

function animationDebut(){
    $("h2").text("Bienvenue chere aventurier !");
    $("h2").animate({top: '+=200px', opacity: 1},2000);
}

animationDebut()

//                                        bouton principal

$("#btn_clicker").click(function(){
  
    clickCompteur++;

    point = point + pointParClick
   
    score = $("#score").html(point)
    
    if(clickCompteur === 5){
        $("h2").text("Essait d'atteindre les 50pts, j'te reserver une surprise")    
    }

    if(clickCompteur === 50){
        $("h2").text("Génial 50pts tu peu maintenant utiliser le gold generateur") 
        $("#ecran_amelioration").animate({height: '100px', opacity: 1},2000)
        $("#autogold_fenetre").animate({opacity: 1},2000)
        $("#prix").text(prix)    
    }   
})

//                                       generateur auto gold






prixAutoGold = 50

$("#autoGold").click(function AutoGold() {
    if(point >= prixAutoGold){
        point = point - prixAutoGold
        setInterval(autoGold, 1000);
        prixAutoGold = prixAutoGold + 50
        prix = prix + 50
        $("#prix").text(prix)       
    }
    if(prix === 100){
        $("#score").css("color", " rgb(43, 172, 43)")
        $("h2").html("Je ressent quelque chose d'étrange... Continue d'amélioré le generateur")      
    }
    if (prix === 150){
        $("h2").html("Regarde !! De l'herbe pousse grace a toi ! continue voire !</br>Un nouveau bouton est apparue, essaie le")

        $("#click_plus1_fenetre").animate({opacity: 1},2000)
        $("#prix_click").text(prixClicker)  

        $("#btn_clicker").css("background-image", "url("+ imageUrl1 +")")
        
    }
})

 
function autoGold() {
        clickCompteur++;
        point++;
        $("#score").html(+point)
}

//                                          Click +1

$("#click_plus1").click(function clickPlusFunction(){
    if(point >= prixClicker){
        pointParClick++
        point = point - prixClicker
        prixClicker = prixClicker + 50
        $("#prix_click").text(prixClicker)
    }
    if(prixClicker === 250){
        $("#btn_clicker").css("background-image", "url("+ imageUrl2 +")")
        $("h2").html("Incroyable... tu fait réaparetre la nature ! Le gazon continue de pousser.</br>Regarde un nouveau bouton est apparue. Test le !")
        $("#upgrade_level_fenetre").animate({opacity: 1},2000)
        $("#prix_upgrade").text(prixUpgrade)
    }
})


//                                          uprage btn

$("#upgrade_level_btn").click(function(){
    if(point >= prixUpgrade){
    point = point - prixUpgrade;
    prixUpgrade = prixUpgrade + 100
    $("#prix_upgrade").text(prixUpgrade)
    $("#btn_clicker").css("background-image", "url("+ imageUrl3 +")")
    $("h2").html("C'est hallucina... eh.. aie... je ressant quelque chose d'étrange</br>gagne encore suffisament de pts pour faire encore pousser le gazon !")   
    }  
    if(prixUpgrade === 400){

        $("#btn_clicker").css("background-image", "url("+ imageUrl4 +")")
        $("h2").html("Le gazon !!! Magnifique, on pourrait asseyer de faire revenir le ciel ?</br>Regarde ce nouveau bouton.")   
        $("#ciel_btn").animate({
            opacity: 1,
            top: "115px"
        },2000)
    }
})
 
//                                          ciel btn

let valeurCiel = 0

$("#ciel_btn").click(function(){
    valeurCiel++
   
    if(valeurCiel === 1){
        $("#ciel_btn").css("background-color", "rgb(167, 25, 37)")
        $("h2").html("hein ?! Il est devenue rouge, reclick pour voire")   
    }
 
    if (valeurCiel === 2){
        $("h2").html("Attend, Attend !!")   
        $("#decompte").animate({
            opacity: 1,
            top: "170px"
        },2000)
        setInterval(decompteCiel, 1000);
        $("button").animate({opacity: 0},2000)
        $("label").animate({opacity: 0},2000)
        $("#score").animate({opacity: 0},2000)

        
    }
})


//                                          ciel animation

let tempCielsec = 10



function decompteCiel() {

    if(tempCielsec > -19){
        tempCielsec--
    }
    
    if(tempCielsec > 0){
        
        $("#decompte").html(tempCielsec)  
    }  
    if(tempCielsec === 5){
        $("h2").html("Pourquoi sa tombe a chaque fois sur moi -_-")   

    }
    
    if(tempCielsec === 0){
        $("body").css("background-color", "black")
        $("#decompte").animate({opacity: 0},2000)
    }
    if (tempCielsec === -5){
       
        $("h2").css("color", "white")
        $("h2").html("Mais quesque ta foutue !!! Bordel ...")   
    }
    if(tempCielsec === -12){
        $("h2").html("Bon, au lieu de paniquer rend toi unpeu utile")   
    }
    if(tempCielsec === -19){
        $("h2").html("Click sur moi, on va peut etre y voire plus claire")   
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

