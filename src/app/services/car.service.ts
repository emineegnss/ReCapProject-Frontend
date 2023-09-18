import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44385/api/';
  constructor(private httpClient: HttpClient) { }

 
  getCars():Observable<ListResponseModule<CarDetail>> {
  let newPath = this.apiUrl + "cars/getalldetail"
   return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCarsByBrand(brandId:number): Observable<ListResponseModule<CarDetail>> {
    let newPath=this.apiUrl + "cars/getbybrand?brandId=" + brandId
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
}
