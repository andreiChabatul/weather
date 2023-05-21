import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { CoreModule } from '../core/core.module';
import { PageInfoComponent } from './pages/page-info.component';
import { PageInfoRoutingModule } from './page.info.routing.module';
import { CommonModule } from '@angular/common';
import { SunriseComponent } from './components/sunrise/sunrise.component';
import { TimePipe } from '../pipe/timePipe';

@NgModule({
    declarations: [
        PageInfoComponent, SunriseComponent, TimePipe
    ],
    imports: [MaterialModule, TranslocoRootModule, CoreModule, CommonModule],
    providers: [

    ],
    exports: [
        PageInfoRoutingModule
    ]
})
export class PageInfoModule { }
