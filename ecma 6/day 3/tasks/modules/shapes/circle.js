import { Shape } from "./shape.js";

export class Circle extends Shape{
    constructor(side) {
        super(side)
    }
    area () {
        return (this.side * this.side * Math.PI).toFixed(2)
    }
    perimeter () {
        return  (2 * this.side * Math.PI).toFixed(2)
    }
}