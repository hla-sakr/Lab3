let h2 = document.getElementById('quantity');


let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');

let cartQuantity = 0;
btn1.addEventListener('click',  add_to_cart );
btn2.addEventListener('click',  show_quantity );
btn3.addEventListener('click',  plus2 );
btn4.addEventListener('click',  plus3 );
btn5.addEventListener('click',  reset );


function add_to_cart(){
    cartQuantity++;
    h2.textContent = cartQuantity;
}

function show_quantity(){
    document.getElementById("quantity").innerHTML = cartQuantity;
    h2.textContent = cartQuantity;
}

function plus2(){
    cartQuantity +=2;
    h2.textContent = cartQuantity;
}

function plus3(){
    cartQuantity +=3;
    h2.textContent = cartQuantity;
}

function reset(){
    cartQuantity =0;
    h2.textContent = cartQuantity;
}
