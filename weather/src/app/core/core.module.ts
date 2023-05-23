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
import { ItemInfoSliderComponent } from './components/item-info-slider/item-info-slider.component';
import { PhoneMainComponent } from './components/phone-main/phone-main.component';
import { ItemInfoAddComponent } from './components/item-info-add/item-info-add.component';
import { ReturnMainComponent } from './components/return-main/return-main.component';
import { SettingMenuComponent } from './components/setting-menu/setting-menu.component';
import { ChangeUnitsComponent } from './components/change-units/change-units.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
    declarations: [
        SearchCityComponent,
        ChangeLanguageComponent,
        HeaderComponent,
        FooterComponent,
        ControlHistoryComponent,
        AddLocationComponent,
        ItemInfoSliderComponent,
        PhoneMainComponent,
        ItemInfoAddComponent,
        ReturnMainComponent,
        SettingMenuComponent,
        ChangeUnitsComponent,
        PopUpComponent
     
    ],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, TranslocoRootModule],
    providers: [

    ],
    exports: [
        SearchCityComponent,
        HeaderComponent,
        FooterComponent,
        PhoneMainComponent,
        ReturnMainComponent,
        PopUpComponent

    ]
})
export class CoreModule { }
