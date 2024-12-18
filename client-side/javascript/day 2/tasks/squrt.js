do {
    var number = prompt("Enter the number and I will calculate the square")
}while (!isFinite(number) || number == "")

    if (typeof number === typeof null) {
        alert("Thank you")
    } else {
        alert(`Your area is ${(Math.sqrt(number)).toFixed(2)} `)
    }