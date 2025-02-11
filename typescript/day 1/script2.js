function getLength(item) {
    var length = 0;
    if (typeof item == "string") {
        length = item.length;
    }
    else if (Array.isArray(item)) {
        length = item.length;
    }
    return "item Length is ".concat(length);
}
console.log(getLength("hello"));
console.log(getLength(["a", "b", "c"]));
console.log(getLength([1, 2]));
console.log(getLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]));
