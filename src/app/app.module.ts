import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsService } from './cars.service';
import { FilterPipe }from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent, CarComponent]
})
export class AppModule { }
