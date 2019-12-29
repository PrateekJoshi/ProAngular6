/* Angular feature model that will allow the data model functionality to be easily used
elsewhere in the application.
*/
import { NgModule } from "@angular/core";
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';


@NgModule({                                                 // Decorator for a Angular module
    imports: [HttpClientModule],
    /* providers : This module provides injectable objects of type ProductRepository, Cart &  StaticDataSource for 
    other modules.
    
    The change to the providers property tells Angular that when it needs to create an instance of a class with a 
    StaticDataSource constructor parameter, it should use a RestDataSource instead. 
    */
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource }
    ]
})

export class ModelModule { }