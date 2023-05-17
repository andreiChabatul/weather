import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SearchCityComponent } from './components/search-city/search-city.component';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
    declarations: [
        SearchCityComponent,
        ChangeLanguageComponent,
        HeaderComponent,

    ],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, TranslocoRootModule],
    providers: [

    ],
    exports: [
        SearchCityComponent, ChangeLanguageComponent
    ]
})
export class CoreModule { }
