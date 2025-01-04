var arr = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
var count = 0
$(".secondary-images img").click(function (e) {
    $(".main-image img").attr("src" , $(e.target).attr("src"))
    $(".main-image").css("display" , "flex")
})

$(".main-image").click(function (e) {
    if(this ==  e.target) {
        $(".main-image").css("display" , "none")
    }
})
$(".prev").click(function () {
    if (count == 0) {
        count = arr.length -1  
      }
    $(".main-image img").attr("src" , `images/${arr[--count]}`)
    
})
$(".next").click(function () {
    $(".main-image img").attr("src" , `images/${arr[++count%arr.length]}`)    
})