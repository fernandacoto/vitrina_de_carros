import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  cars = [
    [{name: "Carro1", brand: "Marca 1"},{name: "Carro2", brand: "Marca 2"},{name: "Carro3", brand: "Marca 3"}],
    [{name: "Carro1", brand: "Marca 1"},{name: "Carro2", brand: "Marca 2"},{name: "Carro3", brand: "Marca 3"}],
    [{name: "Carro1", brand: "Marca 1"},{name: "Carro2", brand: "Marca 2"},{name: "Carro3", brand: "Marca 3"}]
  ];
  set_of_cars;
  constructor(service: CarsService) {
    this.set_of_cars = service.getCars();
   }
  getCarsChunked(){
    let i,j,temparray,chunk = 3;
    for (i=0,j=this.set_of_cars.length; i<j; i+=chunk) {
        temparray = this.set_of_cars.slice(i,i+chunk);
    }
    return temparray;
  }
}
