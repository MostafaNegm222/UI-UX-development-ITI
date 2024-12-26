let cards = document.querySelector(".cards")
let loader = document.querySelector(".loader-container")


var xhr = new XMLHttpRequest ()
xhr.open('get' , "https://jsonplaceholder.typicode.com/posts")
xhr.send()

xhr.addEventListener("readystatechange" , function () {
    if (xhr.readyState === 3) {
        loader.style.display = "block"
    }
    if (xhr.readyState === 4) {
        if (xhr.status == 200) {
            loader.style.display = "block"
            setTimeout(function () {
                var postsArray = JSON.parse(xhr.response)
                if(postsArray) {
                    loader.style.display = "none"
                }
                postsArray.forEach(function (ele) {
                createPosts (ele)
            });
            },3000)
        } else {
            window.location.replace("error.html")
        }
    }
})

function createPosts (ele) {
    let card = document.createElement("div")
    let cardHeader = document.createElement("h2")
    let cardP = document.createElement("p")
    let cardSpan = document.createElement("span")
    card.classList.add("card")
    card.appendChild(cardHeader)
    card.appendChild(cardP)
    card.appendChild(cardSpan)
    cardHeader.textContent = ele.title
    cardP.textContent = ele.body
    cardSpan.textContent = ele.id
    cards.appendChild(card)
}