let arr = []
function reverse () {
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])
    }
   return [arr,[].concat(arr.reverse())]
}

document.write(`<h1>${reverse(1,2,3,'negm','mostafa')}</h1>`)

let [arr1,arr2]=reverse(1,2,3,'negm','mostafa')