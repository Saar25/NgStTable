import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { StTableCellDirective } from '../../directives/ng-st-table-cell.directive';
import { StTableColumn, StTableElement } from '../../types';

@Component({
    selector: 'st-table',
    templateUrl: './ng-st-table.component.html',
    styleUrls: ['./ng-st-table.component.css']
})
export class NgStTableComponent<T extends StTableElement> implements OnInit {

    @ContentChildren(StTableCellDirective)
    public templates: QueryList<StTableCellDirective>;

    @Input()
    public elements: T[];

    @Input()
    public columns: StTableColumn[];

    constructor() { }

    public ngOnInit(): void {
    }
}
