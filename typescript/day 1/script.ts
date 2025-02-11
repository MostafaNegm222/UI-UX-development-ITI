type colors = 'red' | 'green' | 'blue'

function getCode (color : colors) : string {
 switch (color) {
    case 'red' : 
     return `#ff0000`;
     case 'green' : 
     return `#00ff00`;
     case 'blue' : 
     return `#0000ff`;
     default:
     return `what is this shit`
 }
}

console.log(getCode('red'));
console.log(getCode('green'));
console.log(getCode('blue'));
// console.log(getCode('blues'));
