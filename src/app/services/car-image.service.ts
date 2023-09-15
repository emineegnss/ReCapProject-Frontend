import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModule } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44385/api/CarImages/"
  constructor(private httpClient: HttpClient) { }
  getCarImage():Observable<ListResponseModule<CarImage>>{
    let newPath = this.apiUrl + "getall"
    return  this.httpClient.get<ListResponseModule<CarImage>>(newPath);
  }
}
