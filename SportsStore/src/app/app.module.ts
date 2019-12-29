import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreGuard } from './store.guard';

@NgModule({                        // Decorator for a Angular module
   /* declarations : Set of component, directives & pipes that belong to this module */
  declarations: [
    AppComponent,
  ],
   /* imports : Set of Angular modules whose exported declarations are available to templates of this module */
  imports: [
    BrowserModule, StoreModule, 
    /* Mapping of URL route to Component using Angular Routing */
    RouterModule.forRoot([
    { path : "store",                 // Path to match against
      component: StoreComponent,      // Component to instantiate when path matches
      canActivate : [StoreGuard]      // Guards to look up using canActivate() method if user is allowed to activate the component. By default its allowed.
    },
    { path : "cart",
      component: CartDetailsComponent,
      canActivate : [StoreGuard]
    },
    { path : "checkout", 
      component : CheckoutComponent,
      canActivate : [StoreGuard]
    },
    { path: "**", redirectTo: "/store"}
  ])],
  /*  providers : This module does not provide any injectable objects */ 
  providers: [StoreGuard],
  /*  bootstrap : root component that Angular creates and inserts into the index.html host web page */
  bootstrap: [AppComponent]
})
export class AppModule { }
