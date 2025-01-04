$(window).scroll(function () {
    // console.log($(window).scrollTop());
    var servicesTop = $(".services").offset().top;
    
    if ($(window).scrollTop() > servicesTop - 20) {
        // console.log("scrolling");
        
        $("header").css({backgroundColor : "black"})
        $(".icon span").css({backgroundColor : "white"})
        $("header img").css({filter : "invert(1)"})
        $(".topPage").show(500)
    } else {
        
        $("header").css({backgroundColor : "white"})
        $(".icon span").css({backgroundColor : "#333"})
        $("header img").css({filter : "invert(0)"})
        $(".topPage").hide(500)
    }

    

})


$(".topPage").click(function () {
    $("html").animate({scrollTop : 0 } , 200, "linear")
})