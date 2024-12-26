var xhr = new XMLHttpRequest()
xhr.open('GET' , "file.txt")
xhr.send()

xhr.addEventListener('load' , function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
        
    }
})