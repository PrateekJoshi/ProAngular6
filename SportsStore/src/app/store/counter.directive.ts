import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChanges } from '@angular/core';


@Directive({                        // Decorator that make an Angular class a Directive
    selector : "[counterOf]"
})

export class CounterDirective {

    constructor(private container : ViewContainerRef, private template : TemplateRef<Object> ){}

    @Input("counterOf")             // Alias that can be used to access counter field with counterOf 
    counter : number;

    ngOnChanges(changes : SimpleChanges)
    {
        this.container.clear();
        for( let i = 0 ; i < this.counter ; i++ )
        {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i+1));
        }
    }
}

class CounterDirectiveContext {
    constructor(public $implicit : any) {}
}