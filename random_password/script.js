let resultat = document.getElementById("resultat");

let btnRandomPassword = document.getElementById("btn_random_password");
btnRandomPassword.addEventListener('click', functionResultat);

let checkBoxcarSpeciaux = document.getElementById("caractere_speciaux").checked;


function functionResultat(){

    let nbCaractere = document.getElementById("input_number").value;
    
    if(checkBoxcarSpeciaux === 1){
        chartPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%?&*()_+-=";
    } else {
        chartPassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }
        

    function functionRandomPassword(length = nbCaractere){

        

        let strPassword = "";       
        let chartPasswordLength = chartPassword.length
        
        

        for (let i = 0; i < length; i++){
            strPassword += chartPassword.charAt(Math.floor(Math.random() * chartPasswordLength))
        }
       
        return strPassword
    }
    
    strPassword = functionRandomPassword();
    resultat.textContent = strPassword;
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



