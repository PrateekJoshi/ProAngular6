/* Angular feature model that will allow the data model functionality to be easily used
elsewhere in the application.
*/
import { NgModule } from "@angular/core";
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';


@NgModule({                                                 // Decorator for a Angular module
    /* providers : This module provides injectable objects of type ProductRepository &  StaticDataSource for other modules */
    providers : [ ProductRepository, StaticDataSource]      

})

export class ModelModule{}