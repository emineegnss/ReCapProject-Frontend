import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './components/car/car-detail.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarImageComponent } from './components/car-image/car-image.component';
import { BrandComponent } from './components/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    CarImageComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
