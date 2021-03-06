

let callBackGetSuccess = function(data) {
    console.log(data)
    
let randomPay = Math.floor(Math.random() * 250);

    url = "url(" + data[randomPay].flag + ")"
$("#ecran").css("background-image", url )

$("#nom_pay").html("Pays : " + data[randomPay].name)
$("#capital").html("Capitale : " + data[randomPay].capital)
$("#languages").html("Language : " + data[randomPay].languages[0].name)
$("#population").html("Population : " + data[randomPay].population)
$("#currencies").html("Nom de monais : " + data[randomPay].currencies[0].name)
$("#timezones").html("Symbole de monais : " + data[randomPay].currencies[0].symbol)


}









$("#btn_random_pay").click(function(){

    let url = "https://restcountries.eu/rest/v2/all"
    
    $.get(url, callBackGetSuccess).done(function() {
        ///alert("second success")
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
        // alert( "finished")
    })


})





/// btn random-box

let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 8);
    
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
    } else {
        window.location.replace("https://hakimoss.github.io/random_currency/index.html")
    }
}


// bouton retour

let btnRetour = document.getElementById("btn_retour");
btnRetour.addEventListener('click', btnRetourFunction)

function btnRetourFunction(){
    window.location.replace("https://hakimoss.github.io/")
}




