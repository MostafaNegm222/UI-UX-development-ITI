try  {

    let value = prompt("Enter date with this format (DD-MM-YYYY)")
    if (value.length == 10 && value.split("")[2] == '-' && value.split("")[5] == '-') {
        document.write(`<h1>${stringToDate(value)}</h1>`);
    } else {
        throw "Wrong formatting"
    }


} catch (err){
    alert("Wrong formatting")
    console.log(err);
    
}

function stringToDate (string) {
    let day = string.split("-").slice(0,1).join("")
    let month = string.split("-").slice(1,2).join("")
    let year = string.split("-").slice(-1).join("")
    console.log(day);
    console.log(month);
    console.log(year);
    let date = new Date (`${month}/${day}/${year}`)
    // let viewDate = date.toUTCString()
    let viewDate = date.toDateString()
    
    return viewDate ;
}