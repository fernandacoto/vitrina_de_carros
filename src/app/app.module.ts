import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsService } from './cars.service';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent, CarComponent]
})
export class AppModule { }
