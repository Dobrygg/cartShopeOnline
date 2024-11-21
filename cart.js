'use strict'

const cart = {
    items: [],
    _totalPrice: 0,
    count: 0,

    calculateItemPrice() {
        this._totalPrice = this.items.reduce((sum, item) => {
            
            return  sum + item.price * item.quantity;
            

        }, 0);
    },

    increaseCount(num) {
        this.count += num; 
    },

    add(name, price, quantity = 1) { 
        const newItem = { name, price, quantity };
        this.items.push(newItem); 
        this.increaseCount(quantity);
        this.calculateItemPrice(); 
    },

    clear() {
        this.items = []; 
        this._totalPrice = 0; 
        this.count = 0; 
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log( this._totalPrice);
    },
};

Object.defineProperty(cart, 'totalPrice', {
    get() {
        this.calculateItemPrice();
        return this._totalPrice;
    }
});


cart.add('app', 16, 4);
cart.add('qiwi', 3, 66);
cart.add('banan', 22, 34);
console.log(cart);
cart.print();




