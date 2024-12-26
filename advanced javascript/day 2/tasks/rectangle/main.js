function Rectangle (width , height) {
    this.width = width
    this.height = height
    Rectangle.count++
}
Rectangle.count =0
Rectangle.showCount = function () {
    return Rectangle.count;
}
Rectangle.prototype = {
    area : function () {
        return this.width * this.height
    },
    perimeter:function () {
        return (this.width + this.height) *2
   },
    toString : function () {
    return `this rectangle has area ${this.area()} and perimeter ${this.perimeter()}`
    }
}

var rect1 = new Rectangle (20,30)
var rect2 = new Rectangle (30,40)
console.log(Rectangle.showCount());

console.log(rect1);
console.log(rect2);
document.write(rect1)
document.write(`<br>`)
document.write(rect2)