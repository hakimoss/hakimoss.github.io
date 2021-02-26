let btnRandomImage = document.getElementById("btn_random_image");
btnRandomImage.addEventListener("click", functionRandomImage)


function functionRandomImage(){
    lien = "url('https://picsum.photos/2000/2000')";
    document.body.style.backgroundImage = lien;   
}





// btn randome box


let btnRandomBox = document.getElementById("btn_random_box");
btnRandomBox.addEventListener('click', randomBtnFuntion)

let final_random_box;

function randomBtnFuntion(){
    

    let random_box_math = Math.floor(Math.random() * 2);
    
    if (random_box_math === 1){
        window.location.replace("https://hakimoss.github.io/random_image/index.html")
    } else {
        window.location.replace("https://hakimoss.github.io/random_color/index.html")
    }
}


