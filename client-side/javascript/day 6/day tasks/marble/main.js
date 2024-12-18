let arr = Array.from(document.images)
let container = document.querySelector(".container")
let count = 0

container.addEventListener('mouseleave' ,function () {
    let interval = setInterval(function () {
        arr.forEach(ele => {
            ele.src = "marble1.jpg"
        });
        arr[count].src = "marble2.jpg"
        count++
        if (count == 6) {
            count = 0
        }
        },500)
        
        container.addEventListener('mouseenter' , function () {
            clearInterval(interval)
        })
})
