var nameReg = /^[a-zA-Z]{3,10}$/;
var phoneReg = /^\d{8}$/
var mobileReg = /^(011|012|010)\d{8}$/
var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


do {
    var username = prompt("Enter your Name")
    
}while(!new RegExp(nameReg).test(username))
    
do {
    var phone = prompt("Enter your phone")
}while(!new RegExp(phoneReg).test(phone))

do {
    var mobile = prompt("Enter your Phone (It must begin with 010 | 011 | 012)")
}while(!new RegExp(mobileReg).test(mobile))

do {
    var email = prompt("Enter your email (It must match example@mail.com)")
}while(!new RegExp(emailReg).test(email))

document.write(`
    <div class="container">
        <h2>Welcome ${username}</h2>
        <p>Your Phone is ${phone}</p>
        <p>Your mobile is ${mobile}</p>
        <p>Your email is ${email}</p>
    </div>
    `)