import { NgModule } from '@angular/core';
import { ReturnMainComponent } from './components/return-main/return-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import { ChangeUnitsComponent } from './components/change-units/change-units.component';
import { SearchCityComponent } from './components/search-city/search-city.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { CommonModule } from '@angular/common';
import { ControlHistoryComponent } from './components/control-history/control-history.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ExtraInfoForecastComponent } from './components/extra-info-forecast/extra-info-forecast.component';
import { TimePipe } from './pipe/timePipe';
import { DayWeek } from './pipe/setDayWeek';
import { HumidityPipe } from './pipe/humidityPipe';
import { TimeConvertPipe } from './pipe/timeConvertPipe';
import { TempPipe } from './pipe/tempPipe';
import { IndexUVPipe } from './pipe/indexUVPipe';
import { VisibilityPipe } from './pipe/visibilityPipe';
import { HumidityColorDirective } from './directives/humidity-color.directive';
import { WeatherIcoDirective } from './directives/weather-ico.directive';
import { RainPipe } from './pipe/rainPipe';
import { ItemFiveDayForecastComponent } from './components/item-five-day-forecast/item-five-day-forecast.component';
import { WindPipe } from './pipe/windPipe';
import { PressurePipe } from './pipe/pressurePipe';


@NgModule({
    declarations: [
        ReturnMainComponent,
        ChangeLanguageComponent,
        ChangeUnitsComponent,
        FooterComponent,
        HeaderComponent,
        PopUpComponent,
        SearchCityComponent,
        ControlHistoryComponent,
        AddLocationComponent,
        ExtraInfoForecastComponent,
        TimePipe,
        DayWeek,
        HumidityPipe,
        TimeConvertPipe,
        TempPipe,
        IndexUVPipe,
        VisibilityPipe,
        HumidityColorDirective,
        WeatherIcoDirective,
        RainPipe,
        ItemFiveDayForecastComponent,
        WindPipe,
        PressurePipe
    ],
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TranslocoModule
    ],
    providers: [],
    exports: [
        ReturnMainComponent,
        FooterComponent,
        HeaderComponent,
        SearchCityComponent,
        TimePipe,
        DayWeek,
        HumidityPipe,
        TimeConvertPipe,
        TempPipe,
        IndexUVPipe,
        VisibilityPipe,
        HumidityColorDirective,
        WeatherIcoDirective,
        RainPipe,
        ItemFiveDayForecastComponent,
        WindPipe,
        PressurePipe
  
    ]
})
export class SharedModule { }
