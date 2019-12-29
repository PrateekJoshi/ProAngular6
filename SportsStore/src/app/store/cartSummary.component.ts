import { Cart } from '../model/cart.model';
import { Component } from '@angular/core';

/* Component for User shopping Cart */
@Component({
    selector : "cart-summary",
    templateUrl : "cartSummary.component.html"
})

export class CartSummaryComponent{

    /*
    When Angular needs to create an instance of this component, it will have to provide a Cart object as a
    constructor argument, using the service that we configured in cart.model.ts by adding the Cart class
    to the feature module’s providers property (model.module.ts). The default behavior for services means that a single Cart
    object will be created and shared throughout the application.
    */
    constructor(public cart : Cart) {}
}