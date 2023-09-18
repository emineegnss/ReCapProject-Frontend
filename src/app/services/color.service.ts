import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModule } from '../models/listResponseModel';
import { Color } from '../models/color';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44385/api/Colors/getall"
  constructor(private httpClient: HttpClient) { }
  getAllColor(): Observable<ListResponseModule<Color>>{
   return this.httpClient.get<ListResponseModule<Color>>(this.apiUrl)
  }
}
