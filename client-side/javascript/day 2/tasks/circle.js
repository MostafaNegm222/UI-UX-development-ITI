
do {
    var radius = prompt("Enter the radius and I will calculate the Area")
}while (!isFinite(radius) || radius == "")

    if (typeof radius === typeof null) {
        alert("Thank you")
    } else {
        alert(`Your area is ${(Math.PI * parseFloat(radius) * parseFloat(radius)).toFixed(2)} `)
    }