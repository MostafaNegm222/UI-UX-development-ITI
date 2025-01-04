$("button").click(function () {
    $(".results").fadeIn(1000)
    $(".results").append(`<div class="child">${$("input").val()} <button class="delete">Delete</button></div>`)
    $("input").val("")
    $(".delete").click(function () {
        $(this).parent().remove()
    })
    
})

console.log($(".results").find(".delete").length == 0)
if($(".results").find(".delete").length == 0) {
    $(".results").css("padding" , "0")
}