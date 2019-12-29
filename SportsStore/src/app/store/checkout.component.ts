import { Component } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl : "checkout.component.html",
    styleUrls : ["checkout.component.css"]
})
export class CheckoutComponent{
    orderSent : boolean = false;
    submitted : boolean = false;

    constructor( public repository : OrderRepository, public order : Order) {}

    /*  The submitOrder method will be invoked when the user submits a form, which is represented by
        an NgForm object. If the data that the form contains is valid, then the Order object will be passed to the
        repository’s saveOrder method, and the data in the cart and the order will be reset.
    */
    submitOrder(form : NgForm)
    {
        this.submitted = true;
        if( form.valid )
        {
            this.repository.saveOrder(this.order).subscribe( order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}