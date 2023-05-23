import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { CoreModule } from '../core/core.module';
import { PageInfoComponent } from './pages/page-info.component';
import { PageInfoRoutingModule } from './page.info.routing.module';
import { CommonModule, WeekDay } from '@angular/common';
import { SunriseComponent } from './components/sunrise/sunrise.component';
import { TimePipe } from '../pipe/timePipe';
import { TimeConvertPipe } from '../pipe/timeConvertPipe';
import { HumidityComponent } from './components/humidity/humidity.component';
import { HumidityColorDirective } from '../directives/humidity-color.directive';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { DayWeek } from '../pipe/setDayWeek';
import { HumidityPipe } from '../pipe/humidityPipe';


@NgModule({
    declarations: [
        PageInfoComponent,
        SunriseComponent,
        TimePipe,
        TimeConvertPipe,
        HumidityComponent,
        HumidityColorDirective,
        InfoGeneralComponent,
        DayWeek,
        HumidityPipe
    ],
    imports: [MaterialModule, TranslocoRootModule, CoreModule, CommonModule],
    providers: [

    ],
    exports: [
        PageInfoRoutingModule
    ]
})
export class PageInfoModule { }
