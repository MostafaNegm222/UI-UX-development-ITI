do {
    var palindrome = prompt("Enter Text and I will check if it palindrome or not ?")
}while(!palindrome || isFinite(palindrome))


var reverse = palindrome.split("").reverse().join("")
var check = confirm("Do you want case sensitive")

if (check) {
    if (palindrome === reverse) {
        alert("Two strings are palindrome")
    }else {
        alert("Two strings anr not palindrome")
    }
}else {
    if (palindrome.toLowerCase() === reverse.toLowerCase()) {
        alert("Two strings are palindrome")
    }else {
        alert("Two strings anr not palindrome")
    }
}

