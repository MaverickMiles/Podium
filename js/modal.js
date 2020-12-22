var agree_button = document.getElementById("user-agree-button");
console.log(agree_button);
var disagree_button = document.getElementsByClassName("disagree-button")[0];
var modal = document.getElementById("myModal");


function display_modal() {
    modal.style.display = "block";
}

function isClickable(){
    if (document.getElementById("rule1").checked &&
        document.getElementById("rule2").checked &&
        document.getElementById("rule3").checked &&
        document.getElementById("rule4").checked &&
        document.getElementById("rule5").checked &&
        document.getElementById("rule6").checked &&
        document.getElementById("rule7").checked &&
        document.getElementById("rule8").checked) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener('load', (event) => {
    console.log("Window loaded");
    setTimeout(display_modal, 3000);
});


agree_button.onclick = function() {
    console.log("here");
    if (isClickable()){
        modal.style.display = "none";
    }
    else{
        var popup = document.getElementById("myPopup2");
        popup.classList.toggle("show");
        setTimeout(function(){popup.classList.toggle("show");}, 5000);
    }
    
}

disagree_button.onclick = function() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(function(){popup.classList.toggle("show");}, 5000);
}