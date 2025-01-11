import { Shape } from "./shape.js"

export class Rectangle extends Shape {
    constructor (side,other) {
        super(side)
        this.other = other
    }
    area () {
        return this.side * this.other
    }
    perimeter () {
        return (this.side + this.other) * 2
    }
}