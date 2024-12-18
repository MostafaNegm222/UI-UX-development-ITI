let p = document.getElementById('PAR')
let td = document.querySelectorAll('td')

td[0].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.fontFamily = e.target.nextSibling.nodeValue
    }
})
td[1].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textAlign = e.target.nextSibling.nodeValue
    }
})

td[2].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.lineHeight = e.target.nextSibling.nodeValue
    }
})
td[3].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.letterSpacing = e.target.nextSibling.nodeValue
    }
})
td[4].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textIndent = e.target.nextSibling.nodeValue
    }
})
td[5].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textTransform = e.target.nextSibling.nodeValue
    }
})
td[6].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.textDecoration = e.target.nextSibling.nodeValue
    }
})
td[7].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.borderStyle = e.target.nextSibling.nodeValue
    }
})
td[8].addEventListener('click' , function (e) {
    if (e.target != this) {
        p.style.borderColor = e.target.nextSibling.nodeValue
    }
})
