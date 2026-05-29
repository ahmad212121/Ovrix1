

function login(){

    let username = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if(username === "admin@gmail.com" && password === "1234"){
        window.location.href = "index.html";
    }else{
        document.getElementById("msg").innerHTML = "You are not allowed";
    }

}


 function buy(){
    window.location.href ="sale.html"
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


function send(){
    let Emailin = document.getElementById("emailin").value;

    if (Emailin == "") {
        alert("ادخل الجيمال الخاص فيك");
    }else{
        alert("تم ارسال البريد سيتم التواصل قريباً");
    }
        document.getElementById("emailin").value = "";
    

}