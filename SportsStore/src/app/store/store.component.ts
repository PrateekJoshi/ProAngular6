import { Component } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';


@Component({                                // Decorator for a Angular Component
    selector : "store",                     // <store> element can be used to access this component
    templateUrl : "store.component.html"    // HTML template for this component can be find at this file
})

export class StoreComponent{

    public selectedCategory = null;

    /* The constructor of this class expects an object of type ProductRepository either to be passes manually or 
        by dependency injection through a ProductRepository class with decorator @Injectable
    */
    constructor( private repository : ProductRepository) {}             

    /*
        Get array of all products from product repository
    */
    get products() : Product[]
    {
        return this.repository.getProducts(this.selectedCategory);
    }

    /*
        Get list of all categories available from product repository
    */
    get categories() : string[] {
        return this.repository.getCategories();
    }

    /*
        Change the selected category
    */
   changeCategory( newCategory ?: string) : void {
       this.selectedCategory = newCategory;
   }


}