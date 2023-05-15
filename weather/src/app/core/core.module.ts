import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';
import { SearchCityComponent } from './components/search-city/search-city.component';


@NgModule({
    declarations: [
        SearchCityComponent

    ],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
    providers: [

    ],
    exports: [
        SearchCityComponent
    ]
})
export class CoreModule { }
