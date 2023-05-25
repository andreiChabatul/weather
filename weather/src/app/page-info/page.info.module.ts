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
import { WindComponent } from './components/wind/wind.component';
import { TempPipe } from '../pipe/tempPipe';
import { UvIndexComponent } from './components/uv-index/uv-index.component';
import { IndexUVPipe } from '../pipe/indexUVPipe';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { VisibilityPipe } from '../pipe/visibilityPipe';
import { PressureComponent } from './components/pressure/pressure.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';
import { ItemFiveDayForecastComponent } from './components/item-five-day-forecast/item-five-day-forecast.component';


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
        HumidityPipe,
        WindComponent,
        TempPipe,
        UvIndexComponent,
        IndexUVPipe,
        VisibilityComponent,
        VisibilityPipe,
        PressureComponent,
        FiveDayForecastComponent,
        ItemFiveDayForecastComponent
    ],
    imports: [MaterialModule, TranslocoRootModule, CoreModule, CommonModule],
    providers: [

    ],
    exports: [
        PageInfoRoutingModule
    ]
})
export class PageInfoModule { }
