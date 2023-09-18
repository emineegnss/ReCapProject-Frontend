import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: CarDetail[] = [];
  dataLoaded = false;

  constructor(
    private carDetailServices: CarService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else{
        this.getCars();
      }
    })
  }
 
  getCars() {
    this.carDetailServices.getCars().subscribe((response) => {
      this.cars = response.data;
     this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    
    this.carDetailServices.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
 
   
  }

