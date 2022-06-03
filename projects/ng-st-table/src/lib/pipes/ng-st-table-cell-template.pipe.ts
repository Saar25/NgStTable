import { Pipe, PipeTransform, QueryList, TemplateRef } from '@angular/core';
import { StTableCellDirective } from '../directives/ng-st-table-cell.directive';
import { StTableColumn } from '../types';

@Pipe({
    name: 'stTableCellTemplate'
})
export class StTableCellTemplatePipe<T> implements PipeTransform {

    public transform(column: StTableColumn, templates: QueryList<StTableCellDirective>): TemplateRef<T> | undefined {
        return templates.find(c => c.slot == column.slot)?.template;
    }

}
