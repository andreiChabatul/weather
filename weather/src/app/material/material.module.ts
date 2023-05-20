import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [],
    imports: [MatAutocompleteModule, MatSelectModule, MatInputModule, MatOptionModule, MatProgressSpinnerModule],
    exports: [MatAutocompleteModule, MatSelectModule, MatInputModule, MatOptionModule, MatProgressSpinnerModule],
})
export class MaterialModule { }