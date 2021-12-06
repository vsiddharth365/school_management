let input = document.querySelector(".container input");
let button = document.querySelector(".login");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector(".container input").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}