let loginButton = document.querySelector(".login")


loginButton.addEventListener("click" ,function (e) {
    e.preventDefault()
    window.location.replace('login.html')
})

var queryString = window.location.search.slice(1).split("&")
var valuesArray = []
queryString.forEach(function (e) {
    let values = e.slice(e.indexOf("=") + 1)
    valuesArray.push(values)
})

let headerName = document.querySelector('.hero h2')
let p = document.querySelector(".hero p")

if (valuesArray[0]) {
    headerName.textContent = `Welcome: ${valuesArray[0]}`
}
p.innerHTML = `your Mobile is: ${valuesArray[1]} <br> and your email is: ${valuesArray[2].replace('%40','@')}<br>
 and your Address is: ${valuesArray[3].replace('+','_')} <br> and your gender is: ${valuesArray[4]}
`
if (valuesArray.length > 0) {
    loginButton.style.display = "none"
}