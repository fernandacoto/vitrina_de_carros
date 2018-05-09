import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  set_of_cars;
  constructor(service: CarsService) {
    this.set_of_cars = service.getCars();
   }
}
