var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var checkInput = document.getElementById("check")
var submit = document.getElementById("submit")

if (localStorage.length > 0) {
    nameInput.value = localStorage.getItem("name")
    emailInput.value = localStorage.getItem("email")
}

submit.addEventListener("click" , function () {
    
    if(checkInput.checked) {
        window.localStorage.setItem("name" , nameInput.value)
        window.localStorage.setItem("email" , emailInput.value)
    } else {
        window.localStorage.clear()
    }

})