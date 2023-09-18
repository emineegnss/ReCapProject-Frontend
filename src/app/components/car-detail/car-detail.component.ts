import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail[]=[];
  dataLoaded= false
  constructor(private carDetailServices: CarDetailService){}
  ngOnInit(): void {
    this.getCarDetail();
  }
  getCarDetail(){
    this.carDetailServices.getCarDetail().subscribe((response)=> {
      this.carDetails = response.data;
  this.dataLoaded= true

    })
  }

}
