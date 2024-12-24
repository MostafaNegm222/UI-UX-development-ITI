function Book (bookName,bookPrice,authorName,authorEmail) {
    this.bookName = bookName
    this.bookPrice = bookPrice
    this.author = function Author () {
        this.authorName = authorName
        this.authorEmail = authorEmail
    }
}

let numOfBook 
let numBookBtn = document.getElementById('numsBtn')
let numBookInput = document.getElementById('booksNum')
let numBookError = document.querySelector(".numBook")
let numContainer = document.querySelector(".books-number")
let bookDataContainer = document.querySelector(".books-data")

numBookBtn.addEventListener('click' , function () {
    validNumBooks ()
})


let bookName = document.getElementById("bookName")
let bookPrice = document.getElementById("bookPrice")
let authorName = document.getElementById("authorName")
let authorEmail = document.getElementById("authorEmail")
let subBook = document.getElementById("subBook")
let nameError = document.querySelector(".nBook")
let priceError = document.querySelector(".pBook")
let nAuthorError = document.querySelector(".nAuthor")
let eAuthorError = document.querySelector(".pAuthor")
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let nameCheck = false
let priceCheck = false
let nAuthorCheck = false
let eAuthorCheck = false
let booksArray = []
let count = 0
// for (let i = 0; i < numOfBook; i++) {
//     let obj = new Book (bookName.value,bookPrice.value,authorName.value, authorEmail.value)
//     booksArray.push(obj)
// }
subBook.addEventListener("click" , function () {
    validBookName ()
    validBookPrice ()
    validAuthorName ()
    validAuthorEmail ()
    if (nameCheck && priceCheck && nAuthorCheck && eAuthorCheck) {
        let obj = new Book (bookName.value,bookPrice.value,authorName.value, authorEmail.value)
        booksArray.push(obj)
        count++
    }
    if (count == numOfBook) {

    }


})


function validNumBooks () {
    if (numBookInput.value == '') {
        numBookError.textContent = "Filed is required"
        numBookError.style.visibility = "visible"

    } else if (!isFinite(numBookInput.value)) {
        numBookError.textContent = "Numbers only"
        numBookError.style.visibility = "visible"
    }
    else {
        numOfBook = parseInt(numBookInput.value)
        numContainer.style.display = "none"
        bookDataContainer.style.display = "block"
    }
}

function validBookName () {
    if (bookName.value == '') {
        nameError.textContent = "Filed is required"
        nameError.style.visibility = "visible"

    } else if (isFinite(bookName.value)) {
        nameError.textContent = "characters only"
        nameError.style.visibility = "visible"
    }
    else {
        nameCheck = true
        nameError.style.visibility = "hidden"
    }
}

function validBookPrice () {
    if (bookPrice.value == '') {
        priceError.textContent = "Filed is required"
        priceError.style.visibility = "visible"

    } else if (!isFinite(bookPrice.value)) {
        priceError.textContent = "Numbers only"
        priceError.style.visibility = "visible"
    }
    else {
        priceCheck = true
        priceError.style.visibility = "hidden"
    }
}

function validAuthorName () {
    if (authorName.value == '') {
        nAuthorError.textContent = "Filed is required"
        nAuthorError.style.visibility = "visible"

    } else if (isFinite(authorName.value)) {
        nAuthorError.textContent = "characters only"
        nAuthorError.style.visibility = "visible"
    }
    else {
        nAuthorCheck = true
        nAuthorError.style.visibility = "hidden"
    }
}

function validAuthorEmail () {

    if (authorEmail.value == '') {
        eAuthorError.textContent = "Filed is required"

    }else if (!(new RegExp(emailReg).test(authorEmail.value)) && authorEmail.value) {
        eAuthorError.textContent = "Must write in this form name@example.com"
    }
    else {
        eAuthorError.textContent = ""
        eAuthorCheck = true
    }

}