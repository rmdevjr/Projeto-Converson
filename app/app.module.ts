import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DolarComponent } from './dolar/dolar.component';
import { RealComponent } from './real/real.component';
import { EuroComponent } from './euro/euro.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    DolarComponent,
    RealComponent,
    EuroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
