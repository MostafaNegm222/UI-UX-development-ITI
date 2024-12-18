do {
    var val1 = prompt("Enter the val1")
}while (!isFinite(val1) || val1 == "")

    if (typeof val1 === typeof null) {
        alert("Thank you")
    } else {
        do {
            var val2 = prompt("Enter the val2")
        }while (!isFinite(val2) || val2 == "")
            
            if (typeof val2 === typeof null) {
                alert("Thank you")
            } else {
                do {
                    var val3 = prompt("Enter the val3")
                }while (!isFinite(val3) || val3 == "")
                    
                    if (typeof val3 === typeof null) {
                        alert("Thank you")
        
            }
        }
    }
    
   
        
        
    var arr = [];
    var sum = 0,
        multiple = 1,
        division = parseFloat(val1)

    arr.push(parseFloat(val1))
    arr.push(parseFloat(val2))
    arr.push(parseFloat(val3))

    for (var i=0 ; i < arr.length ; i ++) {
        sum+= arr[i];
        multiple*=arr[i];
    }
    for (var i=0 ; i < arr.length-1 ; i ++) {
        division/=arr[i+1]
    }

  if ( typeof val1 ===typeof null || typeof val2 ===typeof null || typeof val3 ===typeof null) {
    document.write(``)
  }
  else {
    document.write(`
        <div class="container">
            <h2>The sum of ${arr[0]} and ${arr[1]} and ${arr[2]} is</h2>
            <p>${sum}</p>
            <h2>The multiple of ${arr[0]} and ${arr[1]} and ${arr[2]} is</h2>
            <p>${multiple}</p>
            <h2>The division of ${arr[0]} and ${arr[1]} and ${arr[2]} is</h2>
            <p>${division}</p>
            
        </div>
        `)
  }




/* ANOTHER SOLUTION */

// var arr = []
// var sum = 0 
// var multiple = 1
// for (let i = 0; i < 3; i++) {
//     do {
//         var num = prompt(`enter value ${i+1}`)
//     } while (!isFinite(num) || num == "")
//         arr.push(Number(num))
//         var division = arr[0]
//         sum+=arr[i];
//         multiple*=arr[i]
//         if (i < arr.length -1) {
//             division /=arr[i+1]
//         }
// }

// console.log(sum);
// console.log(multiple);
// console.log(division);

// use eval()