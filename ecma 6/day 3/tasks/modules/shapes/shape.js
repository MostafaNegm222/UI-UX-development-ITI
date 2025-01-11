export class Shape {
    constructor (side) {
        if (this.constructor == Shape) {
            throw `this is abstract class`
        }
        this.side = side
    }
    area () {
        
    }
    perimeter () {
       
    }
    toString () {
        return `The area is ${this.area()} cm and The perimeter is ${this.perimeter()}`
    }
}