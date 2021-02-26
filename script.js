/*

let btn = document.getElementById("btn_color");
btn.addEventListener('click', fonctionBtn);

let valeur = document.getElementById("valeur");

function fonctionBtn(){
    let random1 = Math.floor(Math.random() * 9);
    let random2 = Math.floor(Math.random() * 9);
    let random3 = Math.floor(Math.random() * 9);
    let random4 = Math.floor(Math.random() * 9);
    let random5 = Math.floor(Math.random() * 9);

    let final = "#F" + random1 + random2 + random3 + random4 + random5;
    
    document.body.style.backgroundColor = final;
    valeur.innerText = final;
    
}
*/

let btn = document.getElementById("btn_color");
btn.addEventListener('click', fonctionBtn);

let valeur = document.getElementById("valeur");

function fonctionBtn(length = 6){
   
    let chart = "ABCDEF0123456789";
    
    let str = "#";

    let chartLength = chart.length;

    for (let i = 0; i < length; i++){
        str += chart.charAt(Math.floor(Math.random() * chartLength))
        
    }  
    return str;
    
}

fonctionBtn(6);
document.body.style.backgroundColor = fonctionBtn();
valeur.innerText = fonctionBtn()
