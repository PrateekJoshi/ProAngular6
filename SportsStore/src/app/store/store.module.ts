import { NgModule } from "@angular/core";
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailsComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';


@NgModule({                                                 // Decorator for a Angular module
    /* imports : Set of Angular modules whole exported declarations are available to templates of this module */
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],     
    /* declarations : Set of component, directives & pipes that belong to this module */
    declarations : [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailsComponent, CheckoutComponent],
    /* exports : The set of components, directives, and pipes declared in this NgModule that can be used in the template of any component */
    exports : [StoreComponent, CartDetailsComponent, CheckoutComponent]                          
})

export class StoreModule{ }