/* Route gurad : To prevent application user from directly (manually) accessing the URL. The URL can only be accessed using Angular
app*/
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StoreComponent } from './store/store.component';

@Injectable()
export class StoreGuard{
    private firstNavigation = true;

    constructor(private router : Router){}

    canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean{
        /* If URL is navigated first time */
        if( this.firstNavigation )
        {
            this.firstNavigation = false;
            if( route.component != StoreComponent )
            {
                this.router.navigateByUrl("/");
                return false;
            }
        }   
        return true;
    }
}