function minMax (...arg) {
    return `The max value is ${Math.max(...arg)} and the min value is ${Math.min(...arg)}`
}

console.log(minMax(10,20,40,15,-2));
