import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { Page404Component } from './pages/page404.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        Page404Component
    ],
    imports: [MaterialModule, TranslocoRootModule, SharedModule],
    providers: [

    ],
    exports: [
        Page404Component
    ]
})
export class Page404Module { }
