import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SearchCityComponent } from './components/search-city/search-city.component';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import { TranslocoRootModule } from '../transloco-root.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ControlHistoryComponent } from './components/control-history/control-history.component';
import { AddLocationComponent } from './components/add-location/add-location.component';


@NgModule({
    declarations: [
        SearchCityComponent,
        ChangeLanguageComponent,
        HeaderComponent,
        FooterComponent,
        ControlHistoryComponent,
        AddLocationComponent

    ],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, TranslocoRootModule],
    providers: [

    ],
    exports: [
        SearchCityComponent, ChangeLanguageComponent, HeaderComponent, FooterComponent
    ]
})
export class CoreModule { }
