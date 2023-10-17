let sliderElement= document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassaword = document.querySelector("#valor");
let passaword = document.querySelector("#passaword");

let containerPassaword = document.querySelector("#container-passaword");


let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()_-+=[]{}|;:,.<>/?^~0123456789";
let novaSenha = "";

sizePassaword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassaword.innerHTML = this.value;
}

buttonElement.addEventListener("click",generatePassaword)

function generatePassaword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value;++i){
        /*math.floor arrendoda o numero aleatorio */
        /*math.random cria um numero aleotorio entre 0 e numero multiplicaso pela função*/

       pass += charset.charAt(Math.floor(Math.random()* n));
       
    }
    containerPassaword.classList.remove("hide");
    passaword.innerHTML = pass;
    novaSenha = pass
     
}

containerPassaword.addEventListener("click",copyPassaword);

function copyPassaword(){
    navigator.clipboard.writeText(novaSenha);
}