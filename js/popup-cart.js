var actionOpen = document.querySelector(".btn.buy");
var actionPopup = document.querySelector(".modal-content");
var actionClose = actionPopup.querySelector(".modal-content-close");

actionOpen.addEventListener("click", function(event) {
    event.preventDefault();
    actionPopup.classList.add("modal-content-show");
});

actionClose.addEventListener("click", function(event) {
    event.preventDefault();
    actionPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (actionPopup.classList.contains("modal-content-show")) {
            actionPopup.classList.remove("modal-content-show");
        }
    }
});


