import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModule } from '../models/listResponseModel';
import { CarDetail } from '../models/car-detail';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44385/api/Cars/getalldetail"
  constructor(private httpClient: HttpClient) { }

  getCarDetail():Observable<ListResponseModule<CarDetail>>{
    return this.httpClient.get<ListResponseModule<CarDetail>>(this.apiUrl)
  }
  
}
