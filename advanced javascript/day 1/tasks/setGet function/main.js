var obj = {
    name : "Negm" ,
    age : 20 , 
    display : function () {
        return `Hello there`
    },
    setGetGen : function () {
        var self = this
        for(var key in self) {
          (function () {
              var variable = self[key]
            if (typeof variable !== 'function') {
            Object.defineProperty(self , key , {
                set : function (val) {
                    variable = val
                },
                get : function () {
                    return variable
                }
            })
            }
            
          })()
        }
    }
}
 
console.log(obj);
console.log(obj.name);
obj.name = "Mostafa"
console.log(obj.name);

var obj2 = {
    id : 2 ,
    address : "Ismailia" ,
    phone : "01152184250" ,
    country : "Egypt",
    display : function () {
        return `Hello there`
    }
}
obj.setGetGen()
obj.setGetGen.call(obj2)
console.log(obj2);
console.log(obj2.id);
obj2.id = "Mostafa"
console.log(obj2.id);
