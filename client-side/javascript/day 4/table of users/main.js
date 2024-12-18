
do {
    var numberOfUsers = parseInt(prompt('Enter Number Of Users'))
} while (!isFinite(numberOfUsers) || !numberOfUsers)

let arrayNames = []
let arrayAges = []
let nameReg = /^[a-zA-Z]{3,10}$/;

let table = document.querySelector("table")
let tbody = document.querySelector('table tbody')
let head = document.querySelector('.container h1')

for(let i =0 ; i < numberOfUsers ; i++) {
    do {
        var username = prompt(`Enter username of User ${i+1}`)
    } while (!username || !new RegExp(nameReg).test(username))
        arrayNames.push(username)
        do {
            var userAge = prompt(`Enter userAge of User ${i+1}`)
        } while (!isFinite(userAge) || !userAge || parseInt(userAge) < 10 || parseInt(userAge) > 60)
            arrayAges.push(userAge)
    }

    for (let i = 0; i < arrayNames.length; i++) {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>${arrayNames[i]}</td>
                        <td>${arrayAges[i]}</td>`
        tbody.appendChild(tr)
    }
    head.style.display = "block"
    table.style.display = "table"


