
function setCookie (key,value,expire) {
    const d = new Date();
    d.setTime(d.getTime() + (expire*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = `${key}=${value}; expire=${expires}`
}

function getCookie (key) {
    let val;
    let arr =document.cookie.split("; ")
    arr.forEach((ele) => {
        let [cookieKey , value] = ele.split('=')
        if (key == cookieKey) {
            val = value
        }
        
    })
    return val
}

function deleteCookie (key) {
    const oldDate = new Date ("10-10-2024")
    document.cookie = `${key}=value; expires=${oldDate}`
}

function getAllCookie () {
    let arr1 = []
    let arr = document.cookie.split("; ")
    arr.forEach((ele) => {
        let [cookieKey , value] = ele.split('=')
        arr1.push([cookieKey,value])
    })
    return arr1
}

function hasCookie (key) {
    let condition = false;
    let arr =document.cookie.split("; ")
    arr.forEach((ele) => {
        let [cookieKey , value] = ele.split('=');
        
        if (key == cookieKey) {
            condition = true;
        } 
        
    })
    return condition
}




// forms.onsubmit = function () {
//     setCookie("name" , username.value ,"2")
//     setCookie("age" , age.value ,"2")
//     setCookie("gender" , gender.value ,"2")
//     setCookie("color" , color.value ,"2")
// }





