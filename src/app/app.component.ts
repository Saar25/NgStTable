import { Component } from '@angular/core';
import { StTableColumn, StTableElement } from 'NgStTable';

@Component({
    selector: 'st-table-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public readonly elements: StTableElement[] = [...Array(100)].map(a => ({
        a: "Hello A",
        b: "World B",
        c: ":)) C",
    }));

    public readonly columns: StTableColumn[] = [
        {
            slot: 'A',
            title: 'First column',
        },
        {
            slot: 'B',
            title: 'Second column',
            width: 2
        },
        {
            slot: 'C',
            title: 'Third column',
        },
    ];

}
