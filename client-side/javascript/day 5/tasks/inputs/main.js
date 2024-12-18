// window.addEventListener('keypress' , function (e)  {
//     let keyCodes = e.keyCode
//     let char = String.fromCharCode(keyCodes)
//     if (e.ctrlKey) {
//         alert(`you press crtl`)
//     }
//     else if (e.shiftKey)  {
//         alert(`you press shift`)
//     }
//         else {
//         alert(`ASCII code is ${keyCodes} for char ${char}`)
//     }
// })

document.addEventListener('keyup', function(event) {
    if (event.ctrlKey || event.shiftKey) { 
        event.preventDefault()
        const modifier = event.ctrlKey ? "Ctrl" : "Shift";
        alert(`${modifier} + ${event.key} was pressed`);
    }
});