import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44385/api/';
  constructor(private httpClient: HttpClient) { }

  getCarsDetails():Observable<ListResponseModule<CarDetail>>{
    let newPath = this.apiUrl + "cars/getalldetail";
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModule<CarDetail>> {
    let newPath=this.apiUrl + "cars/getbycolor?colorId=" + colorId
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCars():Observable<ListResponseModule<CarDetail>> {
  let newPath = this.apiUrl + "cars/getall"
   return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  getCarsDetailsId(carDetailId: number):Observable<ListResponseModule<CarDetail>>{
    let newPath = this.apiUrl + "cars/getdetailsid?id="+carDetailId;
    return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  }
  
  getCarsById(carId:number):Observable<ListResponseModule<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbyid?id=" + carId
     return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
    }
   getCarsByBrand(brandId:number): Observable<ListResponseModule<CarDetail>> {
     let newPath=this.apiUrl + "cars/getbybrand?brandId=" + brandId
     return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
   }

  // getCarDetailsByBrandNameAndColorName(brandName:string, colorName:string):Observable<ListResponseModule<CarDetail>>{
  //   let newPath = this.apiUrl + "car/getcardetailsbybrandnameandcolorname?brandName="+brandName + "&colorName=" + colorName;
  //   return this.httpClient.get<ListResponseModule<CarDetail>>(newPath);
  // }
}
