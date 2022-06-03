# StTableLibrary

Generic table for angular projects

## How to use

Inside the component, initialize the elements and the columns of the table

```typescript
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
```

In the html, define how to display each of the slots
```html
    <st-table [columns]="columns" [elements]="elements">
        <ng-template stTableCell="A" let-element>
            <span>A is {{element.a}}</span>
        </ng-template>
        <ng-template stTableCell="B" let-element>
            <span>B is {{element.b}}</span>
        </ng-template>
        <ng-template stTableCell="C" let-element>
            <span>C is {{element.c}}</span>
        </ng-template>
    </st-table>
```