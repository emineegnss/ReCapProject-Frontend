import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModule } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44385/api/Brands/getall"
  constructor(private httpClient:HttpClient) { 

  }
  getAllBrand(): Observable<ListResponseModule<Brand>>{
    return this.httpClient.get<ListResponseModule<Brand>>(this.apiUrl)
  }
}
