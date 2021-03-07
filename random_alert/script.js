
$(document).ready(function(){



var coche;

$("#aliments").click(function aliment(){
    $("#vehicules").prop('checked',false);
    $("#sante").prop('checked',false);
    $("#consommation").prop('checked',false);
    $("#aide").text("indiquer des aliment ex: Banane, poulet ou frommage")
})

$("#vehicules").click(function aliment(){
    $("#aliments").prop('checked',false);
    $("#sante").prop('checked',false);
    $("#consommation").prop('checked',false);
    $("#aide").text("indiquer des model ex: toyota, honda ou sonata")
})

$("#sante").click(function aliment(){
    $("#aliments").prop('checked',false);
    $("#vehicules").prop('checked',false);
    $("#consommation").prop('checked',false);
    $("#aide").text("indiquer des tous se qui peut avoir un lien avec la santé ex: vaccin, condom ou acétaminophène")
})

$("#consommation").click(function aliment(){
    $("#aliments").prop('checked',false);
    $("#vehicules").prop('checked',false);
    $("#sante").prop('checked',false);
    $("#aide").text("indiquer nimporte qu'elle type d'objet de consomation ex: sucette, canabis ou jouet")

})





let callBackGetSuccess = function(data) {
    console.log(data.results[0].title)
    $("#premier").html(data.results[0].title)
    $("#deuxieme").html(data.results[1].title)
    $("#troisieme").html(data.results[2].title)
    $("#quatrieme").html(data.results[3].title)
    $("#cinquieme").html(data.results[4].title)

    $("#suivant").click(function(){
        $("#premier").html(data.results[5].title)
        $("#deuxieme").html(data.results[6].title)
        $("#troisieme").html(data.results[7].title)
        $("#quatrieme").html(data.results[8].title)
        $("#cinquieme").html(data.results[9].title)
    })

    $("#precedent").click(function(){
        $("#premier").html(data.results[0].title)
        $("#deuxieme").html(data.results[1].title)
        $("#troisieme").html(data.results[2].title)
        $("#quatrieme").html(data.results[3].title)
        $("#cinquieme").html(data.results[4].title)
    })
}

$("#new_recherche").click(function(){
    chant = $("#chant_recherche")[0].value
    console.log($("#aliments").prop('checked'))

    
        if($("#aliments").prop('checked')){
            coche = 1    
        } 
        if($("#vehicules").prop('checked')){
            coche = 2
        } 
        if($("#sante").prop('checked')){
            coche = 3
        } 
        if($("#consommation").prop('checked')){
            coche = 4
        } 

    

    let url = "https://healthycanadians.gc.ca/recall-alert-rappel-avis/api/search?search=" + chant + "&lang=fr&cat=" + coche + "&lim=10"



    $.get(url, callBackGetSuccess).done(function() {
        
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
        // alert( "finished")
    })

    
})
})





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


