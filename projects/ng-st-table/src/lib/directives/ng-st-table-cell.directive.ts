import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[stTableCell]'
})
export class StTableCellDirective {

    @Input('stTableCell')
    public slot: string;

    constructor(public readonly template: TemplateRef<any>) { }

}
