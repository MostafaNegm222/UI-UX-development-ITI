let show = document.querySelector('.show')
let password = document.querySelector('#password')
let numberOnly = document.getElementById('numOnly')

show.addEventListener('click' , function () {
    if (password.type == 'password') {
        show.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
        password.type = 'text'
    } else {
        show.innerHTML = `<i class="fa-solid fa-eye"></i>`
        password.type = 'password'
    }
})

numberOnly.addEventListener('input' , function (e) {
    if (!isFinite(numberOnly.value)) {
        e.preventDefault()
        numberOnly.value = ""
    }
})