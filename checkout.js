module.exports = class Checkout{
    constructor(){
        this.prices = new Object();
        this.discounts = new Object();
        this.items = new Object();
    }

    addItemPrice(item,price){
        this.prices[item] = price;
    }

    addItem(item){
        if(this.prices[item] == undefined) {
            throw("No price defined for item "+item);
        }
        // this.total+= this.prices[item];
        if(this.items[item] == undefined)
        {
            this.items[item] = 1;
        } else {
            this.items[item]++;
        }
    }
    calculateTotal(){
        let total = 0;
        for(var item in this.items){
            total += this.calculateItemTotal(item);
        }
        return total;
    }
    calculateItemTotal(item){
        let total = 0;
        let discount = this.discounts[item];
        if(discount != undefined){
            let nbrOfDiscounts = this.items[item] / discount.cnt;
            total += nbrOfDiscounts * discount.price;
            let remainder = this.items[item] % discount.cnt;
            total += remainder * this.prices[item];
        } else {
            total += (this.prices[item] * this.items[item]);
        }
        return total;
    }
    addDiscount(item, itemCnt, discountPrice){
        this.discounts[item] = {cnt:itemCnt, price:discountPrice};
    }
}