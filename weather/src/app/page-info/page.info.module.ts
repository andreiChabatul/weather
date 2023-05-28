import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { PageInfoComponent } from './pages/page-info.component';
import { PageInfoRoutingModule } from './page.info.routing.module';
import { CommonModule } from '@angular/common';
import { SunriseComponent } from './components/sunrise/sunrise.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { HumidityColorDirective } from '../directives/humidity-color.directive';
import { WeatherIcoDirective } from '../directives/weather-ico.directive';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { WindComponent } from './components/wind/wind.component';
import { UvIndexComponent } from './components/uv-index/uv-index.component';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';
import { ItemFiveDayForecastComponent } from './components/item-five-day-forecast/item-five-day-forecast.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PageInfoComponent,
        SunriseComponent,
        HumidityComponent,
        HumidityColorDirective,
        InfoGeneralComponent,
        WindComponent,
        UvIndexComponent,
        VisibilityComponent,
        PressureComponent,
        FiveDayForecastComponent,
        ItemFiveDayForecastComponent,
        WeatherIcoDirective,
    ],
    imports: [MaterialModule, TranslocoRootModule, CommonModule, SharedModule],
    providers: [

    ],
    exports: [
        PageInfoRoutingModule
    ]
})
export class PageInfoModule { }
