import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    NaviComponent,
    CarComponent,
    CarImageComponent,
    CarDetailComponent,
    BrandComponent,
    ColorComponent,
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
