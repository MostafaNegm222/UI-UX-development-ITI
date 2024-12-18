// i = 5

var arr =[]

for (var i = 0; i < 5; i++) {
    arr.push(function () {
        console.log("i" , i);
    })
    
}

arr[0]()
arr[1]()

// ****************************************************************


// self invoke function with closure (two different scopes [outer - inner])

var arr =[]

for (var i = 0; i < 5; i++) {
    (function () {
        var x = i
        arr.push(function () {
            console.log("i" , x);
        })
    })()
    
}

arr[0]()
arr[1]()

// another way


var arr =[]

for (var i = 0; i < 5; i++) {
    (function (x) {
        arr.push(function () {
            console.log("i" , x);
        })
    })(i)
    
}

arr[0]()
arr[1]()