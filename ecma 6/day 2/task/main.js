let loader = document.querySelector(".loader-container")
let userTap = document.querySelector(".users-tab")
async function getUsers () {
        try {
            loader.style.display = "block"
        let users = await fetch("https://jsonplaceholder.typicode.com/users")
        if(users.ok) {
            let arrayUsers = await users.json()
            arrayUsers.forEach(function (ele) {
                loader.style.display = "none"
                var div = document.createElement("button")
                div.innerText = ele.name
                div.setAttribute("id" , ele.id)
                div.classList.add("user")
                userTap.append(div)
                });
                getPosts ()
        } else {
            throw "No users found"
        }
        } catch (error) {
            console.log(error);
            window.location.replace("error.html")
            
        }
}

getUsers()

function getPosts () {
let userPosts = document.querySelector(".users-tab")
let users = document.querySelectorAll(".user")
let postsDiv = document.querySelector(".posts")

userPosts.addEventListener("click" , function (e) {
    Array.from(users).forEach(function (ele) {
        ele.classList.remove("active")
    })
    let ids = e.target.getAttribute("id")

    e.target.classList.add("active")
    let posts = new Promise(function (res,rej) {
        let postsUrl = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ids}`)
        if(postsUrl) {
            res(postsUrl)
        } else {
            rej("no posts founds")
        }
        
    })
    posts.then(data => {
        let userPost = data.json()
        console.log(userPost);
        return userPost
    }).then(posts => {
        console.log(posts);
        postsDiv.innerHTML = "";
        posts.forEach(function (ele) {
                let div = document.createElement("div")
                div.classList.add("post")
                div.innerHTML =`
                <span>${ele.id}</span>
                <h2>${ele.title}</h2>
                <p>${ele.body}</p>
                `
                postsDiv.appendChild(div)
            })
    })
    .catch((err) => {
        console.log(err);
        window.location.replace("error.html")
        loader.style.display = "none"
    })

})
}



