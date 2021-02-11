class MyArray {
    constructor () {
        this.length = 0;
        this.items = {};
    }

    getArrayItem(index) {
        return this.items[index];
    }

    addNewItem(item) {
        this.items[this.length] = item;
        this.length++;
        return this.length;
    }

    removeLastItem() {
        const lastItem = this.items[this.length - 1];
        delete this.items[this.length - 1];
        this.length--;
        return lastItem;
    }

    deleteItem(index) {
        const item = this.items[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        delete this.items[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();

console.log(newArray);
console.log(newArray.getArrayItem(0)); // undefined

console.log(newArray.addNewItem('foo'));
console.log(newArray);

newArray.addNewItem('bar');
newArray.addNewItem('bistro');

newArray.removeLastItem();
console.log(newArray);

newArray.addNewItem('café');
newArray.addNewItem('restaurant');
newArray.deleteItem(2);

console.log(newArray);
