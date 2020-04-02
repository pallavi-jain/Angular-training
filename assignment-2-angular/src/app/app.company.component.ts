import { Component, Input } from '@angular/core';

@Component({
    selector:'app-company',
    templateUrl : 'app.company.html'
})
export class CompanyComponent {
    
    @Input()
    company;
    constructor() { }
}
