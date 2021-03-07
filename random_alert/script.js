

var urlclick1;
var urlclick2;
var urlclick3;
var urlclick4;
var urlclick4;



///                             les chexk box
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


///                             les resultat


let callBackGetSuccess = function(data) {
    console.log(data)
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

    urlclick1 = data.results[0].url
    urlclick2 = data.results[1].url
    urlclick3 = data.results[2].url
    urlclick4 = data.results[3].url
    urlclick5 = data.results[4].url


}

///                             apelle a l'API


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








/////                       detail 1



let callBackGetSuccess2 = function(data) {
    console.log(data)
    $("#premier").html(data.panels[0].text)
    $("#deuxieme").html(data.panels[1].text)
    $("#troisieme").html(data.panels[2].text)
    $("#quatrieme").html(data.panels[3].title)
    $("#cinquieme").html(data.panels[3].text)
 
}


$("#premier").click(function(){

    $("p").css("visibility", "hidden")
    $("#btn_random_box").css("visibility", "hidden")
    $("#new_recherche").css("visibility", "hidden")
    $("#conainer_mid").css("border", "0px solid black")
    $("input").css("visibility", "hidden")
    $("label").css("visibility", "hidden")
    
    
    

    let url2 = urlclick1

    $.get(url2, callBackGetSuccess2).done(function() {
        
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
        // alert( "finished")
    })

})

/////                       detail 2



let callBackGetSuccess3 = function(data) {
    console.log(data)
    $("#premier").html(data.panels[0].text)
    $("#deuxieme").html(data.panels[1].text)
    $("#troisieme").html(data.panels[2].text)
    $("#quatrieme").html(data.panels[3].title)
    $("#cinquieme").html(data.panels[3].text)
 
}


$("#deuxieme").click(function(){

    $("p").css("visibility", "hidden")
    $("#btn_random_box").css("visibility", "hidden")
    $("#new_recherche").css("visibility", "hidden")
    $("#conainer_mid").css("border", "0px solid black")
    $("input").css("visibility", "hidden")
    $("label").css("visibility", "hidden")
    

    let url3 = urlclick2

    $.get(url3, callBackGetSuccess3).done(function() {
        
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
        // alert( "finished")
    })

})

/////                       detail 3



let callBackGetSuccess4 = function(data) {
    console.log(data)
    $("#premier").html(data.panels[0].text)
    $("#deuxieme").html(data.panels[1].text)
    $("#troisieme").html(data.panels[2].text)
    $("#quatrieme").html(data.panels[3].title)
    $("#cinquieme").html(data.panels[3].text)
 
}


$("#troisieme").click(function(){

    $("p").css("visibility", "hidden")
    $("#btn_random_box").css("visibility", "hidden")
    $("#new_recherche").css("visibility", "hidden")
    $("#conainer_mid").css("border", "0px solid black")
    $("input").css("visibility", "hidden")
    $("label").css("visibility", "hidden")
    

    let url4 = urlclick3

    $.get(url4, callBackGetSuccess4).done(function() {
        
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
        // alert( "finished")
    })

})

/////                       detail 4



let callBackGetSuccess5 = function(data) {
    console.log(data)
    $("#premier").html(data.panels[0].text)
    $("#deuxieme").html(data.panels[1].text)
    $("#troisieme").html(data.panels[2].text)
    $("#quatrieme").html(data.panels[3].title)
    $("#cinquieme").html(data.panels[3].text)
 
}


$("#quatrieme").click(function(){

    $("p").css("visibility", "hidden")
    $("#btn_random_box").css("visibility", "hidden")
    $("#new_recherche").css("visibility", "hidden")
    $("#conainer_mid").css("border", "0px solid black")
    $("input").css("visibility", "hidden")
    $("label").css("visibility", "hidden")
    

    let url5 = urlclick4

    $.get(url5, callBackGetSuccess5).done(function() {
        
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
        // alert( "finished")
    })

})

/////                       detail 5



let callBackGetSuccess6 = function(data) {
    console.log(data)
    $("#premier").html(data.panels[0].text)
    $("#deuxieme").html(data.panels[1].text)
    $("#troisieme").html(data.panels[2].text)
    $("#quatrieme").html(data.panels[3].title)
    $("#cinquieme").html(data.panels[3].text)
 
}


$("#cinquieme").click(function(){

    $("p").css("visibility", "hidden")
    $("#btn_random_box").css("visibility", "hidden")
    $("#new_recherche").css("visibility", "hidden")
    $("#conainer_mid").css("border", "0px solid black")
    $("input").css("visibility", "hidden")
    $("label").css("visibility", "hidden")
    

    let url6 = urlclick5

    $.get(url6, callBackGetSuccess6).done(function() {
        
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


