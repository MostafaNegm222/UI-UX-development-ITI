$(".container").animate({width:"100%"},2000).animate({height:"100vh"},2000 , function () {
    $("h2").fadeIn(1000,function (){
        $('p').fadeIn(1000,function () {
            // for (let i = 0; i < 3; i++) {
            //     $('.card').eq(i).show(1000)
            // }
            $('.card').eq(0).fadeIn(1000,function () {
                $('.card').eq(1).fadeIn(1000,function () {
                    $('.card').eq(2).fadeIn(1000)
                })
            })
        })
    })
})


