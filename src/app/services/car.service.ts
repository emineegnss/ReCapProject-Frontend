import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44385/api/';
  constructor(private httpClient: HttpClient) { }

 
  getCars():Observable<ListResponseModule<Car>> {
  let newPath = this.apiUrl + "cars/getall"
   return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
   getCarsByBrand(brandId:number): Observable<ListResponseModule<Car>> {
     let newPath=this.apiUrl + "cars/getbybrand?brandId=" + brandId
     return this.httpClient.get<ListResponseModule<Car>>(newPath);
   }
   getCarsByColor(colorId:number): Observable<ListResponseModule<Car>> {
    let newPath=this.apiUrl + "cars/getbycolor?colorId=" + colorId
    return this.httpClient.get<ListResponseModule<Car>>(newPath);
  }
}
