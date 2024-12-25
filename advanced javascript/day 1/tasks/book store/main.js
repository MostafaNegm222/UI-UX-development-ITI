function Author (authorName, authorEmail) {
    this.authorName = authorName
    this.authorEmail = authorEmail
}

function Book (id,bookName,bookPrice,authorName,authorEmail) {
    this.id = id
    this.bookName = bookName
    this.bookPrice = bookPrice
    this.author = new Author (authorName,authorEmail)
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
let eAuthorError = document.querySelector(".eAuthor")
let tableContainer = document.querySelector(".table-container")
let tableBody = document.querySelector(".table-container table tbody")
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let nameCheck = false
let priceCheck = false
let nAuthorCheck = false
let eAuthorCheck = false
let booksArray = []
let count = 0
let tdId = 0

subBook.addEventListener("click" , function () {
    validBookName ()
    validBookPrice ()
    validAuthorName ()
    validAuthorEmail ()
    console.log(booksArray);
    if (nameCheck && priceCheck && nAuthorCheck && eAuthorCheck) {
        let obj = new Book (count,bookName.value,bookPrice.value,authorName.value, authorEmail.value)
        console.log(obj);
        booksArray.push(obj)
        count++
        tablePush ()
    }
    
    if (count == numOfBook) {
        bookDataContainer.style.display = "none"
        tableContainer.style.display = 'block'
    }
    bookName.value = ''
    bookPrice.value = ''
    authorName.value = ''
    authorEmail.value = ''
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
        eAuthorError.style.visibility = "visible"

    }else if (!(new RegExp(emailReg).test(authorEmail.value)) && authorEmail.value) {
        eAuthorError.textContent = "Must write in this form name@example.com"
        eAuthorError.style.visibility = "visible"
    }
    else {
        eAuthorError.style.visibility = "hidden"
        eAuthorCheck = true
    }

}

function tablePush () {
        let tr = document.createElement("tr")
        tr.setAttribute("id",`td-${tdId}`)
        tr.innerHTML = `<td>${bookName.value}</td>
                        <td>${bookPrice.value}</td>
                        <td>${authorName.value}</td>
                        <td>${authorEmail.value}</td>
                        <td><button class="btn edit">Edit</button></td>
                        <td><button class="btn delete">Delete</button></td>`
        tableBody.appendChild(tr)
        tdId++

        document.addEventListener("click" , function (e) {
            handelEdit (e)
            handelDelete (e)
        })
}

function handelEdit (e) {
    // if (e.target.classList.contains("edit")) {
    //     e.target.parentElement.parentElement.innerHTML = `<td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("title")].bookName}'></td>
    //                 <td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("id")].bookPrice}'></td>
    //                 <td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("id")].author.authorName}'></td>
    //                 <td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("id")].author.authorEmail}'></td>
    //                 <td><button class="btn edit save">Save</button></td>
    //                 <td><button class="btn delete cancel">cancel</button></td>`
    // }
    // if (e.target.classList.contains("cancel")) {
    //     console.log(booksArray[e.target.parentElement.parentElement.getAttribute("id")]);
        
    // }
    // if (e.target.classList.contains("save")) {
    //     e.target.parentElement.parentElement.innerHTML =`<td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("id")].bookName}'></td>
    //                 <td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("id")].bookPrice}'></td>
    //                 <td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("id")].author.authorName}'></td>
    //                 <td><input type="text" value='${booksArray[e.target.parentElement.parentElement.getAttribute("id")].author.authorEmail}'></td>
    //                 <td><button class="btn edit">Edit</button></td>
    //                 <td><button class="btn delete">Delete</button></td>`
    // }
    if (e.target.classList.contains("edit")) {
        var tds = document.querySelector(`#${e.target.parentElement.parentElement.getAttribute("id")}`).children
        console.log(tds);
        for (let i = 0; i < 4; i++) {
            let input = document.createElement("input")
            input.value = tds[i].textContent
            tds[i].innerHTML = ''
            tds[i].appendChild(input)
        }
        tds[4].innerHTML = `<td><button class="btn save">Save</button></td>`
        tds[5].innerHTML = `<td><button class="btn cancel">Cancel</button></td>`
    }
    // if(e.target.classList.contains("save")) {
    //     for (let i = 0; i < 4; i++) {
    //         tds[i].innerHTML = arr[i]
    //         tds[4].innerHTML = `<td><button class="btn edit">Edit</button></td>`
    //         tds[5].innerHTML = `<td><button class="btn delete">Delete</button></td>`
    //     }
    // }
}

function handelDelete (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove()
    }
    if(tableBody.children.length == 0 && bookDataContainer.style.display == "none") {
        tableContainer.style.display = "none"
        numContainer.style.display = "block"
        nameCheck = false
        priceCheck = false
        nAuthorCheck = false
        eAuthorCheck = false
        booksArray = []
        count = 0
        numBookInput.value = ""
    }
}