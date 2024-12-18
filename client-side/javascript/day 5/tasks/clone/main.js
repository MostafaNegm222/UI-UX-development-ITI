let div = document.querySelector(".element")

div.addEventListener('click' , function () {
    let red = Math.round(Math.random() *256)
    let green = Math.round(Math.random() *256)
    let blue = Math.round(Math.random() *256)
    let clone = div.cloneNode()
    clone.innerText = "I'm sub Original"
    clone.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`
    document.body.appendChild(clone)
})