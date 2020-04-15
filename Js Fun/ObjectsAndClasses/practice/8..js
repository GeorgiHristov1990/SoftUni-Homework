class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct = function (item) {
        this.storage.push(item)
        // this.storage = productInput;
        // Object.assign(this.storage,productInput)
        this.capacity -= item.quantity;
        this.totalCost += item.price*item.quantity;
    }
    
    getProducts() {
        let output = [];
        for (const el of this.storage) {
            output.push(JSON.stringify(el));
        }
        return output.join('\n')
    }
}


let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);