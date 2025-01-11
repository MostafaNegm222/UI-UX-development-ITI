import { Rectangle } from "./shapes/rectangle.js";
import { Circle } from "./shapes/circle.js";
import { Square } from "./shapes/square.js";


let sq1 = new Square (5)
let rec1 = new Rectangle(4,6)
let cir1 = new Circle(5)


console.log(sq1,cir1,rec1);

document.body.innerHTML = `Square :${sq1}<br>
                            Circle :${cir1}<br>
                            Rectangle :${rec1}`