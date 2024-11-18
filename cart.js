'use strict'

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice;
    },

    calculateItemPrice() {
        this.totalPrice = this.items.reduce((sum, item) => {
            
            return sum + item.price * item.quantity;
            
        }, 0);
    },

    increaseCount(num) {
        this.count += num; 
    },

    add(name, price, quantity = 1) { 
        const newItem = { name, price, quantity };
        this.items.push(newItem);
        this.calculateItemPrice(); 
        this.increaseCount(quantity); 
    },

    clear() {
        this.items = []; 
        this.totalPrice = 0; 
        this.count = 0; 
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
};

