'use strict'

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice: function getTotalPrice() {
        return this.totalPrice;
    },

    calculateItemPrice: function calculateItemPrice() {
        this.totalPrice = this.items.reduce((sum, item) => {
            if (typeof item.price === 'number' && typeof item.quantity === 'number' && item.price >= 0 && item.quantity >= 0) {
                return sum + item.price * item.quantity;
            } else {
                console.warn(`Invalid item data: ${JSON.stringify(item)}. Skipping.`);
                return sum;
            }
        }, 0);
    },

    increaseCount: function increaseCount(num) {
        this.count += num; 
    },

    add: function add(name, price, quantity = 1) { // Исправлено: quantity
        if (typeof price !== 'number' || price < 0 || typeof quantity !== 'number' || quantity < 0) {
            console.log(`Item not added.`);
            return;
        }
        const newItem = { name, price, quantity };
        this.items.push(newItem);
        this.calculateItemPrice(); 
        this.increaseCount(quantity); 
    },

    clear: function clear() {
        this.items = []; 
        this.totalPrice = 0; 
        this.count = 0; 
    },

    print: function print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
};