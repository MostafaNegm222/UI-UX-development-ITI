class Storages <T>{
    items : T[] = []
    push (item:T) {
        this.items.push(item)
    }
    getAllItems () {
        return this.items
    }
    pop (item:T) {
        this.items = this.items.filter(i => i != item)
    }
}

const stringStorage  = new Storages <string> ();

stringStorage.push("hello");
stringStorage.push("hohoho");
stringStorage.pop("hohoho");
console.log(stringStorage.getAllItems()); // ["hello"]