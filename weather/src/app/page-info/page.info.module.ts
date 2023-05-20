import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { CoreModule } from '../core/core.module';
import { PageInfoComponent } from './pages/page-info.component';
import { PageInfoRoutingModule } from './page.info.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PageInfoComponent
    ],
    imports: [MaterialModule, TranslocoRootModule, CoreModule, CommonModule],
    providers: [

    ],
    exports: [
        PageInfoRoutingModule
    ]
})
export class PageInfoModule { }
