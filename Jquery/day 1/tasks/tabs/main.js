$(".tab").click(function () {
    $(".tab").removeClass("active")
    $(this).addClass("active")
    $("p").text(`container ${$(this).text().split(" ")[1]}`)
    $('p').fadeIn(1000)
})