let nameError = document.querySelector('.name-error')
let ageError = document.querySelector('.age-error')
let emailError = document.querySelector('.email-error')
let nameInput = document.querySelector('#username')
let ageInput = document.querySelector('#userAge')
let emailInput = document.querySelector('#userEmail')
let tableContainer = document.querySelector('.table-container')
let tableBody = document.querySelector('tbody')
let submit = document.querySelector("[type='button']")
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let nameCheck = false
let ageCheck = false
let emailCheck = false

submit.addEventListener('click' , function (e) {
    
    e.preventDefault()
    if (nameInput.value == '') {
        nameError.textContent = "Filed is required"

    } else if (isFinite(nameInput.value)) {
        nameError.textContent = "Characters only"
    }
    else {
        nameError.textContent = ""
        nameCheck = true
    }


    if (ageInput.value == '') {
        ageError.textContent = "Filed is required"

    } else if (!isFinite(ageInput.value)) {
        ageError.textContent = "Numbers only"
    }
    else {
        ageError.textContent = ""
        ageCheck = true
    }

    if (emailInput.value == '') {
        emailError.textContent = "Filed is required"

    }else if (!(new RegExp(emailReg).test(emailInput.value)) && emailInput.value) {
        emailError.textContent = "Must write in this form name@example.com"
    }
    else {
        emailError.textContent = ""
        emailCheck = true
    }

    if (nameCheck && ageCheck && emailCheck) {
    let tr = document.createElement('tr')
    tr.innerHTML = `<td>${nameInput.value}</td>
                    <td>${ageInput.value}</td>
                    <td>${emailInput.value}</td>`
    nameInput.value = ''
    ageInput.value = ''
    emailInput.value = ''

    tableBody.appendChild(tr)
    tableContainer.style.display = "block"
    }
    

})