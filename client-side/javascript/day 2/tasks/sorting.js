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
        
            }else {
                do {
                    var val4 = prompt("Enter the val4")
                }while (!isFinite(val4) || val4 == "")
                    
                    if (typeof val4 === typeof null) {
                        alert("Thank you")
        
            }else {
                do {
                    var val5 = prompt("Enter the val5")
                }while (!isFinite(val5) || val5 == "")
                    
                    if (typeof val5 === typeof null) {
                        alert("Thank you")
        
            }
                }
            }
        }
    }

    var arr = []
    arr.push(val1)
    arr.push(val2)
    arr.push(val3)
    arr.push(val4)
    arr.push(val5)

    // document.write(`
    //     <div class="container">
    //         <h2>The Array is</h2>
    //         <p>${arr}</p>
    //         <h2>The Array in ascending</h2>
    //         <p>${arr.sort()}</p>
    //         <h2>The Array in descending</h2>
    //         <p>${[].concat(arr.sort().reverse())}</p>
            
    //     </div>
    //     `)

        document.write(`
            <div class="container">
                <h2>The Array is</h2>
                <p>${arr}</p>
                <h2>The Array in ascending</h2>
                <p>${arr.sort((a,b) => a-b)}</p>
                <h2>The Array in descending</h2>
                <p>${[].concat(arr.sort((a,b) => b-a))}</p>
                
            </div>
            `)