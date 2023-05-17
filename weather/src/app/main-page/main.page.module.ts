import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { MainPageComponent } from './pages/main-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        MainPageComponent
    ],
    imports: [MaterialModule, TranslocoRootModule, CoreModule],
    providers: [

    ],
    exports: [
        MainPageComponent

    ]
})
export class MainPageModule { }
