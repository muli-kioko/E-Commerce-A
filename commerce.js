const searchBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector(".search-form");

searchBtn.onclick = function(){
    searchForm.classList.toggle('active')
};

const loginBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form");

loginBtn.onclick = function(){
    loginForm.classList.toggle('active')
};



const menuBtn = document.querySelector('.lnr-menu');
const navList = document.querySelector('.navlist');

menuBtn.onclick = function() {
    menuBtn.classList.toggle('lnr-cross-circle');
    navList.classList.toggle('active')
};


function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);