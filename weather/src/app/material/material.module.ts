import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
    declarations: [],
    imports: [MatAutocompleteModule, MatSelectModule, MatInputModule, MatOptionModule],
    exports: [MatAutocompleteModule, MatSelectModule, MatInputModule, MatOptionModule],
})
export class MaterialModule { }