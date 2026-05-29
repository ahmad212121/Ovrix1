

function login(){

    let username = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if(username === "admin@gmail.com" && password === "1234"){
        window.location.href = "home.html";
    }else{
        document.getElementById("msg").innerHTML = "You are not allowed";
    }

}


 function buy(){
    window.location.href ="brands.html"
 }

 let addBtns = document.querySelectorAll(".add-btn");
let cartBadge = document.querySelector(".cart-badge");

let count = 0;

addBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        count++;

        cartBadge.innerHTML = count;

        btn.innerHTML = "✓";

        setTimeout(() => {
            btn.innerHTML = "+";
        }, 1000);

    });

});


cartBadge.addEventListener("click", () => {

    count = 0;

    cartBadge.innerHTML = count;

});


    let code = document.getElementById('codeing')
    let codetrue = document.querySelector(".code-true");
    let codefalse = document.querySelector(".code-false");
    let btn = document.querySelector(".code");
    
    function trycode(){
    if(code.value ==="ORVIX2026" || code.value ==="BILAL2026" ||code.value ==="AHMAD2026"){
            codetrue.style.display="block";
            btn.style.display="none";
             setTimeout(() => {
        codetrue.style.display = "none";
        code.value = "";
        btn.style.display = "block";
    }, 3000);

    }else{
        codefalse.style.display="block";
            btn.style.display="none";
             setTimeout(() => {
        codefalse.style.display = "none";
        code.value = "";
        btn.style.display = "block";
    }, 1000);
    }
    }
       
   function trycountry(){
       window.location.href="home.html"
    }
    function shoping(){
        window.location.href="shop.html"
    }

    let lable = document.getElementById('sson');
    let email =document.querySelector('.emailin');
    let btnn =document.querySelector('.button');

    function sendEmail(){
        email.style.display = "none"
        btn.style.display = "none"
        lable.style.display="block";
    }