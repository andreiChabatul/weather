import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { MainPageComponent } from './pages/main-page.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { SharedModule } from '../shared/shared.module';
import { PhoneMainComponent } from './components/phone-main/phone-main.component';
import { ItemInfoSliderComponent } from './components/item-info-slider/item-info-slider.component';
import { ItemInfoAddComponent } from './components/item-info-add/item-info-add.component';
import { CommonModule } from '@angular/common';
import { FavoriteContainerComponent } from './components/favorite-container/favorite-container.component';

@NgModule({
    declarations: [
        MainPageComponent,
        MainInfoComponent,
        PhoneMainComponent,
        ItemInfoSliderComponent,
        ItemInfoAddComponent,
        FavoriteContainerComponent
    ],
    imports: [MaterialModule, TranslocoRootModule, SharedModule, CommonModule],
    providers: [

    ],
    exports: [
        MainPageComponent

    ]
})
export class MainPageModule { }
