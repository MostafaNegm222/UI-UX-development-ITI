function Shape (side) {
    this.side = side
}
Shape.prototype = {
    calcArea : function () {
        return this.side * this.side
    },
    calcPerimeter : function () {
        return this.side  * 4
    },
    display : function () {
        return `this rectangle has area ${this.calcArea()} and perimeter ${this.calcPerimeter()}`
    }
}

function Square (side) {
    Shape.call(this , side)
    if (this.constructor == Square) {
        Square.count++
        if (Square.count > 1) {
            throw `you can create one instance only`
        }
    }
}
Square.count = 0

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

function Circle (side) {
    Shape.call(this , side)
}
Circle.prototype = Object.create(Square.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.calcArea = function () {
    return (this.side * this.side * Math.PI).toFixed(2)
}
Circle.prototype.calcPerimeter = function () {
    return (2 * this.side * Math.PI).toFixed(2)
}

function Rectangle (side , other) {
    Shape.call(this , side)
    this.other = other
    if(this.constructor == Rectangle) {
        Rectangle.count++
        if (Rectangle.count > 1) {
        throw `you can create one instance only`
    }
    }
}
Rectangle.count = 0
Rectangle.prototype = Object.create(Circle.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.calcArea = function () {
    return this.side * this.other
}
Rectangle.prototype.calcPerimeter = function () {
    return (this.side + this.other) * 2
}

var sq1 = new Square(10)
var cir1 = new Circle(10)
var rec1 = new Rectangle(10 ,20)

console.log(sq1.display())
console.log(cir1.display())
console.log(rec1.display())



