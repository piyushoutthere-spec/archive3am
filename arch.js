// switch from landing to dash
const enterbtn = document.getElementById("enterbtn");
const homepg = document.querySelector(".homepage");
const hero = document.querySelector(".hero");
const dash = document.getElementById("dash");

//open dash
enterbtn.addEventListener("click",function () {
    hero.style.display = "none";
    dash.style.display = "grid";
});