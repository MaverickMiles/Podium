var agree_button = document.getElementsByClassName("agree-button")[0];
var disagree_button = document.getElementsByClassName("disagree-button")[0];
var modal = document.getElementById("myModal");


function display_modal() {
    modal.style.display = "block";
}

window.addEventListener('load', (event) => {
    console.log("Window loaded");
    setTimeout(display_modal, 3000);
});


agree_button.onclick = function() {
    modal.style.display = "none";
}

disagree_button.onclick = function() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(function(){popup.classList.toggle("show");}, 5000);
}