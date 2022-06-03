import { Component } from '@angular/core';
import { StTableColumn } from 'NgStTable';
import { from, Observable, shareReplay } from 'rxjs';
import { Country } from './types/country.type';

@Component({
    selector: 'st-table-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public readonly Object = Object;

    private readonly countries$: Observable<Country[]> = from(fetch('https://restcountries.com/v3.1/all').then(res => res.json())).pipe(shareReplay(1))

    public readonly elements: Observable<Country[]> = this.countries$;

    public readonly columns: StTableColumn[] = [
        {
            slot: 'name',
            title: 'Name',
        },
        {
            slot: 'population',
            title: 'Population',
        },
        {
            slot: 'languages',
            title: 'Languages',
        },
        {
            slot: 'region',
            title: 'Region',
        },
        {
            slot: 'flag',
            title: 'Flag',
            width: .5
        },
        {
            slot: 'symbol',
            title: 'Symbol',
            width: .5
        },
    ];
}
