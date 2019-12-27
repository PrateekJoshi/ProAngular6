import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

/*
    @Injectable : This decorator specifies that this class object should be automatically injected to other module (
        in the constructor of StoreComponent class (refer store.component.ts) .
    )
*/
@Injectable()
export class ProductRepository{
    private products : Product[] = [];
    private categories : string[] = [];

    constructor(private dataSource : StaticDataSource )
    {
        dataSource.getProducts().subscribe( data => {
            this.products = data;
            this.categories = data.map( p => p.category).filter( (c,index,array) => array.indexOf(c) == index).sort();
        } );
    }
    
    getProducts( category : string = null ) : Product[]
    {
        return this.products.filter( p => category == null || category == p .category);
    }

    getProduct(id : number) : Product{
        return this.products.find(p => p.id == id);
    }

    getCategories() : string[]
    {
        return this.categories;
    }
}