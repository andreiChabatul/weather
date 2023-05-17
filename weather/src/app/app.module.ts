import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderWeatherComponent } from './slider-weather/slider-weather.component';
import { ItemSliderInfoComponent } from './item-slider-info/item-slider-info.component';
import { ItemSliderExtraInfoComponent } from './item-slider-extra-info/item-slider-extra-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { LangChangeEffects } from './store/effects/langEffect';
import { EffectsModule } from '@ngrx/effects';
import { MainPageModule } from './main-page/main.page.module';

@NgModule({
  declarations: [
    AppComponent,
    SliderWeatherComponent,
    ItemSliderInfoComponent,
    ItemSliderExtraInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MainPageModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([LangChangeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
