import { Component, OnInit } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';

@Component({
    selector: 'new-Template',
    templateUrl: 'newTemplate.component.html'
})

export class NewTemplate{

    constructor() { }

    ngOnInit() { }
    pdpOutlets = ProductDetailOutlets;
}