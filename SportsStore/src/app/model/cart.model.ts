import { Injectable } from '@angular/core';
import { Product } from './product.model';

/* Cart Model : The user needs a cart into which products can be placed and used to start the checkout process */

@Injectable()
export class Cart {
    public lines: CartLine[] = [];                 // Product with its quantity
    public itemCount: number = 0;                  // No of items
    public cartPrice: number = 0;                  // Total Cart price

    /* Add a product with a given quantity to cart , also update the Cart */
    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    /* Update quantity of a product inside a cart */
    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if( line != undefined )
        {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    /* Remove a Product with all quantity present from a cart */
    removeLine(id : number)
    {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index,1);
        this.recalculate();
    }

    /* Clear a cart */
    clear(){
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    /* Method to recalculate the cart price, quantity, etc */
    private recalculate()
    {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach( line => {
            this.itemCount += line.quantity;
            this.cartPrice += (line.quantity * line.product.price);
        });
    }


}

export class CartLine {
    constructor(public product: Product, public quantity: number) { }

    get lineTotal() {
        return this.quantity * this.product.price;
    }
}