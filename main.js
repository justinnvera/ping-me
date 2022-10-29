let emailInput = document.getElementById("email-input");
let notifyButton = document.getElementsByClassName("notify");
let emailInputErrorMessage = document.getElementById("email-input-error-message");

function check() {
    console.log("Function Check triggered")
    if (emailInput.value.length != 0 && emailInput.value.match("@") && emailInput.value.match(".")) {
        console.log("Display set to none");
        console.log("Contains @");
        emailInputErrorMessage.style.display = "none";
        emailInput.style.border = "var(--pale-blue) 1px solid";
    } else {
        console.log("Display set to block");
        console.log("Does not contain @");
        emailInputErrorMessage.style.display = "block";
        emailInput.style.border = "1px red solid";
    }
}