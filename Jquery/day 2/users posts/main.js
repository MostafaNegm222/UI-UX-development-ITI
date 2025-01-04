$.ajax({
    url : "https://jsonplaceholder.typicode.com/users" ,
    method : "GET" ,
    success : function (data) {
        console.log(data);
        data.forEach(function (ele) {
            var div = document.createElement("button")
            div.innerText = ele.name
            div.setAttribute("id" , ele.id)
            div.classList.add("user")
            $(".users-tab").append(div)
        });

        $(".user").click(function (e) {
            $(".user").removeClass("active")
            $(this).addClass("active")
            $.ajax({
                url : `https://jsonplaceholder.typicode.com/posts?userId=${$(e.target).attr("id")}` ,
                method : "GET" ,
                success : function (data) {
                    $(".posts").html("")
                    data.forEach(function (ele) {
                    $(".posts").append(`<div class="post">
                    <span>${ele.id}</span>
                    <h2>${ele.title}</h2>
                    <p>${ele.body}</p>
                    </div>`)
                        })
                    }
            })




        })
    }
})