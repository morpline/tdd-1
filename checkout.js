module.exports = class Checkout{
    constructor(){
        this.prices = new Object();
        this.total = 0;
    }

    addItemPrice(item,price){
        this.prices[item] = price;
    }

    addItem(item){
        this.total+= this.prices[item];
    }
    calculateTotal(){
        return this.total;
    }
}