function* fibonacci (count) {
    let current = 0
    let next = 1
    let counter = 0 
    while(counter != count) {
        yield current;
        [current,next] = [next,current+next]
        counter++
    }
}

let fbi1 = fibonacci(5)
console.log(fbi1.next());
console.log(fbi1.next());
console.log(fbi1.next());
console.log(fbi1.next());
console.log(fbi1.next());
console.log(fbi1.next());


function* fibonacci1 (max) {
    let current = 0
    let next = 1
    while(current <= max) {
        yield current;
        [current,next] = [next,current+next]
    }
}
let fbi2 = fibonacci1(8)
console.log(fbi2.next().value);
console.log(fbi2.next().value);
console.log(fbi2.next().value);
console.log(fbi2.next().value);
console.log(fbi2.next().value);
console.log(fbi2.next().value);
console.log(fbi2.next().value);
console.log(fbi2.next().value);
console.log(fbi2.next().value);
