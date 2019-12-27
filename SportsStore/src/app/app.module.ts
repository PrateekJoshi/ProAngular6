import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

@NgModule({                        // Decorator for a Angular module
   /* declarations : Set of component, directives & pipes that belong to this module */
  declarations: [
    AppComponent,
  ],
   /* imports : Set of Angular modules whose exported declarations are available to templates of this module */
  imports: [
    BrowserModule, StoreModule
  ],
  /*  providers : This module does not provide any injectable objects */ 
  providers: [],
  /*  bootstrap : root component that Angular creates and inserts into the index.html host web page */
  bootstrap: [AppComponent]
})
export class AppModule { }
