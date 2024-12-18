let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let button = document.querySelector("button")
let container = document.querySelector(".container")


button.addEventListener('click' ,function () {
    button.style.display = "none"
    container.style.display = "flex"
    let counter = setInterval(function () {
        let timeNow = new Date();
        let hourCount = timeNow.getHours()
        let minutesCount = timeNow.getMinutes()
        let secondCount = timeNow.getSeconds()
        hours.textContent =  hourCount < 10 ? `0${hourCount}:` : `${hourCount}:`
        minutes.textContent = minutesCount < 10 ? `0${minutesCount}:` : `${minutesCount}:`
        seconds.textContent = secondCount < 10 ? `0${secondCount}` : secondCount
    },1000)
    
    document.addEventListener('keyup', function(event) {
        
        if (event.ctrlKey && event.key == "q") { 
            event.preventDefault()
            clearInterval(counter)
        }
    });
})