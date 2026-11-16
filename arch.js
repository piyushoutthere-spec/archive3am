// enter archive button 
const enterbtn = document.getElementById("enterbtn");
const accesmsg= document.getElementById("accessmsg");

enterbtn.addEventListener("click", function () {
    accesmsg.textContent = "ACCESS GRANTED MAN! - INITIALIZING ARCHIVE PLEASE WAIT!....";
    enterbtn.textContent = "ACCESS APPROVED";
    enterbtn.disabled = true;
});