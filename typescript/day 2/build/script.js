"use strict";
class Storages {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    getAllItems() {
        return this.items;
    }
    pop(item) {
        this.items = this.items.filter(i => i != item);
    }
}
const stringStorage = new Storages();
stringStorage.push("hello");
stringStorage.push("hohoho");
stringStorage.pop("hohoho");
console.log(stringStorage.getAllItems()); // ["hello"]
