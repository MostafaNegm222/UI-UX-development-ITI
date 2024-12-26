let cards = document.querySelector(".cards")
let loader = document.querySelector(".loader-container")
let card = document.createElement("div")
let cardHeader = document.createElement("h2")
let cardP = document.createElement("p")
let cardSpan = document.createElement("span")
card.classList.add("card")
card.appendChild(cardHeader)
card.appendChild(cardP)
card.appendChild(cardSpan)

var xhr = new XMLHttpRequest ()
xhr.open('get' , "https://jsonplaceholder.typicode.com/posts")
xhr.send()
console.log(xhr);

xhr.addEventListener("readystatechange" , function () {
    if (xhr.readyState === 3) {
        loader.style.display = "block"
    }
    if (xhr.readyState === 4) {
        if (xhr.status == 200) {
            loader.style.display = "none"
            var postsArray = JSON.parse(xhr.response)
            postsArray.forEach(function (ele) {
                cardHeader.textContent = ele.title
                cardP.textContent = ele.body
                cardSpan.textContent = ele.id
            });
            cards.appendChild(card)
        } else {
            window.open('error.html' , _self)
        }
    }
})
