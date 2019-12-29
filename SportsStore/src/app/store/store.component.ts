import { Component } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';


@Component({                                // Decorator for a Angular Component
    selector: "store",                     // <store> element can be used to access this component
    templateUrl: "store.component.html"    // HTML template for this component can be find at this file
})

export class StoreComponent {

    public selectedCategory = null;         // Currently selected product category (null for all)
    public productsPerPage = 4;             // Used for pagination (display 4 products per page)
    public selectedPage = 1;                // Used for pagination (Currently displayed page)

    /* The constructor of this class expects an object of type ProductRepository either to be passes manually or 
        by dependency injection through a ProductRepository class with decorator @Injectable
    */
    constructor(private repository: ProductRepository, private cart : Cart, private router : Router) { }

    /*
        Get array of all products from product repository, add slicing for pagination 
    */
    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    /*
        Get list of all categories available from product repository
    */
    get categories(): string[] {
        return this.repository.getCategories();
    }

    /*
        Change the selected category
    */
    changeCategory(newCategory?: string): void {
        this.selectedCategory = newCategory;
    }

    /* Update the selected page */
    changePage(newPage: number): void {
        this.selectedPage = newPage;
    }

    /* Change page size */
    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    /* Display number of pages required in pagination based on no of records fetched 
         (Alternative approach to get page numbers)
   
     get pageNumbers() : number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
                 .fill(0).map((x,i) => i+1);
    }
      */

    /* Display number of pages required in pagination based on no of records fetched */
    get pageCount() : number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length/ this.productsPerPage);
    }

    /* Add a product to cart */
    addProductToCart(product : Product) : void {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }


}