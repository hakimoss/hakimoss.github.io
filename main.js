
/*
let btnEnter = document.querySelector('#btn_enter');

btnEnter.addEventListener('click', () =>{
    chant1 = document.getElementById("chant_principale").value, 
    document.getElementById("li1").innerHTML = chant1;    
});

*/


/*
 function addLi() {
     let txtVal = document.getElementById('chant_principale').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement('LI'),
        txtNode = document.createTextNode(txtVal);

        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
 }

 */
let btnEnter = document.querySelector('#btn_enter');
chant1 = document.getElementById("chant_principale").value;
var tag = document.getElementsByTagName("ul");
            
            
                btnEnter.addEventListener('click', () =>{
                    chant1 = document.getElementById("chant_principale").value;
                    for (var i = 0; i < tag.length; i++ ){
                    tag[i].innerHTML = chant1;
                }
                })
                
            