let header = document.querySelector("h2")
let ageShow = document.querySelector("p")
let visit = document.querySelector("p.visit")
let genderShow = document.querySelector("img")
let logout = document.querySelector("button")

// window.onload = function () {
    // let count = 1
    let count = getCookie("count")
    setCookie("count" , ++count ,"2")

    console.log(count);
    
    
// }

header.innerHTML = getCookie("name")
header.style.color = getCookie("color")
ageShow.innerHTML = getCookie("age")
visit.innerHTML = getCookie("count")
genderShow.src = getCookie("gender") == "male" 
? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdmvTNzX2AmCX2rSRQBa4KkZsU2GgiWh8sA&s" :
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPRQ6LprnPzvvP-_vVO_nhSokwda8CMsnwQ&s";
logout.addEventListener("click" , function () {
    deleteCookie("name")
    deleteCookie("age")
    deleteCookie("gender")
    deleteCookie("color")
    deleteCookie("count")
    window.location.href = "index.html"
})