var c = document.getElementById("canvas")
var color = document.getElementById("color")
var draw = document.getElementById("draw")
var ctx  = c.getContext("2d")


draw.addEventListener("click" , function () {
    ctx.clearRect(0,0,500,500)
    for (let i = 0; i < 50; i++) {
        var x = Math.trunc(Math.random() * 500)
        var y = Math.trunc(Math.random() * 500)
        ctx.beginPath()
        ctx.arc(x, y, 20, 0, 2*Math.PI)
        ctx.strokeStyle = color.value
        ctx.stroke()
    }
})
