import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgStTableComponent } from './components/ng-st-table/ng-st-table.component';
import { StTableCellDirective } from './directives/ng-st-table-cell.directive';
import { StTableCellTemplatePipe } from './pipes/ng-st-table-cell-template.pipe';



@NgModule({
    declarations: [
        NgStTableComponent,
        StTableCellTemplatePipe,
        StTableCellDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NgStTableComponent,
        StTableCellDirective,
    ]
})
export class NgStTableModule { }
