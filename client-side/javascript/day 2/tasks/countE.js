
do {
    var text = prompt("Enter Name And I Will Count Numbers of E").toLowerCase()
}while(!text || isFinite(text))
var count = 0 

// for (let i = 0 ; i <text.length ; i++) {
//     if (text[i] === "e") {
//         count++
//     }
// }
for (let i = 0 ; i <text.length ; i++) {
    if (text[i].startsWith("e")) {
        count++
    }
}
//MATCH METHOD

document.write(`
    <div class="container">
    <h2>The number of E is ${count}</h2>
    </div>`)