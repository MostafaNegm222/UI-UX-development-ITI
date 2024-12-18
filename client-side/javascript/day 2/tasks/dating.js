var dateRex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

do {
var date = prompt("please Enter date in this format (MM/DD/YYYY)")
if (typeof date === typeof null) {
    break;
}
}while(!new RegExp(dateRex).test(date))

var arr = ["sunday" , "monday" , "tuesday" , "wednesday" ,"thursday","friday","saturday"]
var day = new Date(date)
if (typeof date === typeof null) {
    alert (`Thank you`)
}else {
    alert (`The Day is ${arr[day.getDay()]}`)
}