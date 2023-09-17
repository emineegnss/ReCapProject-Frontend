import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44385/api/Brands"
  constructor(private httpClient: HttpClient) {

   }
   getBrands(): Observable<ListResponseModule<Brand>>{
   let newPath = this.apiUrl + "/getall";
      return this.httpClient.get<ListResponseModule<Brand>>(newPath);
   }
}
