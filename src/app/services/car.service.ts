import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44385/api/Cars/';
  constructor(private httpClient: HttpClient) { }

 
  getCars():Observable<ListResponseModule<Car>> {
  let newPath = this.apiUrl + "getalldetail"
   return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
}
