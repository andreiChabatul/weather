import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { MainPageComponent } from './pages/main-page.component';
import { CoreModule } from '../core/core.module';
import { MainInfoComponent } from './components/main-info/main-info.component';

@NgModule({
    declarations: [
        MainPageComponent, MainInfoComponent
    ],
    imports: [MaterialModule, TranslocoRootModule, CoreModule],
    providers: [

    ],
    exports: [
        MainPageComponent

    ]
})
export class MainPageModule { }
