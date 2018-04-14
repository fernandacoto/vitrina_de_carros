import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}
  getCars() {
    let apiUrl = './assets/cars.json';
    return this.http.get(apiUrl)
      .map( (response: Response) => {
         return response;
      });
  }

}
