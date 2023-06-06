import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { LangChangeEffects } from './store/effects/langEffect';
import { EffectsModule } from '@ngrx/effects';
import { MainPageModule } from './main-page/main.page.module';
import { PageInfoModule } from './page-info/page.info.module';
import { Page404Module } from './page404/page.404.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PageInfoModule,
    Page404Module,
    CoreModule,
    MainPageModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([LangChangeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
