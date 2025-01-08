let fruits = ["apple", "strawberry", "banana", "orange","mango"];

let every = fruits.every((ele) => typeof ele == "string")
console.log(every);

let some = fruits.some((ele) => ele.startsWith("a"))
console.log(some);

let filteredArray = fruits.filter((ele) => ele.startsWith("b") || ele.startsWith("s"))
console.log(filteredArray);

let mappedArray = fruits.map((ele) => `I love ${ele}`).forEach((ele) => console.log(ele))