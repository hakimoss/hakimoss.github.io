

// I885YR5LLHH7FSP3
var monais1Final

var monais2Final

function functionMonais1(){
    let monais1 = document.getElementById("monnais1")
    let selected1 = monais1.selectedIndex;  
    monais1.options[selected1].text;
    monais1Final = monais1.value
  
    console.log(monais1Final)

}

function functionMonais2(){
    let monais2 = document.getElementById("monnais2")
    let selected2 = monais2.selectedIndex;  
    monais2.options[selected2].text;
    monais2Final = monais2.value
  
    console.log(monais2Final)

}
    

  




let callBackGetSuccess = function(data) {
    console.log(data)
    curencyValue = Math.round(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]*100)/100
    $("#resulta").html(curencyValue + " " + data["Realtime Currency Exchange Rate"]["4. To_Currency Name"] + " pour un " + data["Realtime Currency Exchange Rate"]["2. From_Currency Name"])

}

$("#new_monnais").click(function(){
  
    
    let cur1 = monais1Final
    

    let cur2 = monais2Final
    console.log(monais1Final)
    console.log(monais2Final)
  
    let url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" + cur1 + "&to_currency=" + cur2 + "&apikey=I885YR5LLHH7FSP3"
        

    console.log(url)

    $.get(url, callBackGetSuccess).done(function() {
        
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







