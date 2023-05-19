import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { CoreModule } from '../core/core.module';
import { Page404Component } from './pages/page404.component';

@NgModule({
    declarations: [
        Page404Component
    ],
    imports: [MaterialModule, TranslocoRootModule, CoreModule],
    providers: [

    ],
    exports: [
        Page404Component
    ]
})
export class Page404Module { }
