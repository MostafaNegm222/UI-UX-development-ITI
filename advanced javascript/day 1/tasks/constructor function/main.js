function Rectangle (width , height) {
    this.width = width
    this.height = height
}
Rectangle.prototype = {
    area : function () {
        return this.width * this.height
    },
    perimeter:function () {
        return (this.width + this.height) *2
   },
    displayInfo : function () {
    return `this rectangle has area ${this.area()} and perimeter ${this.perimeter()}`
    }
}

var rect1 = new Rectangle (20,30)
var rect2 = new Rectangle (30,40)

console.log(rect1);
console.log(rect2);
console.log(rect1.displayInfo());
console.log(rect2.displayInfo());
