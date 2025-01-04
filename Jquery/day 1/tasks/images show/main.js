$(".secondary-images img").click(function (e) {
    $(".main-image img").attr("src" , $(e.target).attr("src"))
})