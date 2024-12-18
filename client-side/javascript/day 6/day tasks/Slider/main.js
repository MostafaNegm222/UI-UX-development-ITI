let slideArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg" ]
let currentIndex = 0
let slide = document.images[0]
let next = document.querySelector(".next")
let previous = document.querySelector(".previous")
let slideShow = document.querySelector(".slide-show")
let stop = document.querySelector(".stop")

next.addEventListener("click" , function () {
   if (currentIndex < slideArray.length -1) {
     currentIndex++
    slide.src = `images/${slideArray[currentIndex]}`
   }
})

previous.addEventListener("click" , function () {
    if (currentIndex > 0) {
          currentIndex--
        slide.src = `images/${slideArray[currentIndex]}`
    }
})

slideShow.addEventListener("click" , function () {
    let slider = setInterval(function () {
    currentIndex = (currentIndex + 1) % slideArray.length
        slide.src = `images/${slideArray[currentIndex]}`
    },1000)

    stop.addEventListener('click' , function () {
        clearInterval(slider)
    })

})