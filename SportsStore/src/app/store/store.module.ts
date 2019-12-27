import { NgModule } from "@angular/core";
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { StoreComponent } from './store.component';


@NgModule({                                                 // Decorator for a Angular module
    /* imports : Set of Angular modules whole exported declarations are available to templates of this module */
    imports: [ModelModule, BrowserModule, FormsModule],     
    /* declarations : Set of component, directives & pipes that belong to this module */
    declarations : [StoreComponent],
    /* exports : The set of components, directives, and pipes declared in this NgModule that can be used in the template of any component */
    exports : [StoreComponent]                          
})

export class StoreModule{ }