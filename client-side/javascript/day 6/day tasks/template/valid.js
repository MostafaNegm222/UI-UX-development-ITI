let nameError = document.querySelector('.name-error')
let addressError = document.querySelector('.address-error')
let mobileError = document.querySelector('.mobile-error')
let emailError = document.querySelector('.email-error')
let nameInput = document.querySelector('#username')
let AddressInput = document.querySelector('#userAddress')
let mobileInput = document.querySelector('#userMobile')
let emailInput = document.querySelector('#userEmail')
let submit = document.querySelector("[type='submit']")
let userForm = document.querySelector('#userForm')
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let nameCheck = false
let mobileCheck = false
let emailCheck = false
let addressCheck = false
console.log(submit);
console.log(userForm);

userForm.addEventListener('submit' , function (e) {
    
    e.preventDefault()
    nameValidation()
    mobileValidation()
    emailValidation()
    addressValidation()
  
    if (nameCheck && mobileCheck && emailCheck && addressCheck) {
        HTMLFormElement.prototype.submit.call(userForm);
    }
})


// if (nameInput.value =="" && AddressInput.value == "" && mobileInput.value == ""  && emailInput.value == '') {
//     setTimeout(function () {
//         submit.style.cssText = `background-color:#586bbf;cursor: not-allowed;border-color:#586bbf`
//         alert("Why you don't write anything !!!!!")

//     },1000)
// }

function nameValidation () {
    if (nameInput.value == '') {
        nameError.textContent = "Filed is required"

    } else if (isFinite(nameInput.value)) {
        nameError.textContent = "Characters only"
    }
    else {
        nameError.textContent = ""
        nameCheck = true
    }
}

function mobileValidation () {
    

    if (mobileInput.value == '') {
        mobileError.textContent = "Filed is required"

    } else if (!isFinite(mobileInput.value)) {
        mobileError.textContent = "Numbers only"
    }
    else {
        mobileError.textContent = ""
        mobileCheck = true
    }

}

function emailValidation () {

    if (emailInput.value == '') {
        emailError.textContent = "Filed is required"

    }else if (!(new RegExp(emailReg).test(emailInput.value)) && emailInput.value) {
        emailError.textContent = "Must write in this form name@example.com"
    }
    else {
        emailError.textContent = ""
        emailCheck = true
    }

}

function addressValidation () {
    if (AddressInput.value == '') {
        addressError.textContent = "Filed is required"

    } else if (isFinite(AddressInput.value)) {
       addressError.textContent = "Characters only"
    }
    else {
        addressError.textContent = ""
        addressCheck = true
    }
}



