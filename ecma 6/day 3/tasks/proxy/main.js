
let handler = {
    get : function (target,prop,proxy){
        if(!(prop in target)) {
            throw "this property isn't exist"
        }
        return target[prop]
    },

    set : function (target,prop,value,proxy) {
        if(!(prop in target)) {
            throw "this property isn't exist"
        }

        switch (prop) {

            case "name" :
            if(value.length > 7) {
                throw "The length is more than 7 characters"
            }
            if (typeof value != "string") {
                throw "The value must be string"
            }
            break;
            case "address" :
            if (typeof value != "string") {
                throw "The value must be string"
            }
            break;
            case "age" : 
            if (typeof value !== "number") {
                throw "The value must be number"
            }
            if (value < 25 || value > 60) {
                throw "the value must be between 25 and 60"
            }
            break;
        }
        target[prop] = value
    }
}

let obj = {
    name : "Negm" ,
    age :28 ,
    address : "there is address"
}


let proxy = new Proxy (obj,handler)

proxy.name = "Mostafa"
proxy.age = 25
proxy.address = 49039
console.log(proxy);
