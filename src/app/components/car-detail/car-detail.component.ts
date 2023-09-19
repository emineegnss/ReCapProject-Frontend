import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  path = 'https://localhost:44385/Uploads/Images/';
  carImageDetail: CarImage[] = [];

  constructor(
    private carServices: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsId(params['carId']);
        this.getCarImagebyCarId(params['carId']);
      }
    });
  }
  getCarDetailsId(carDetailId: number) {
    this.carServices.getCarsDetailsId(carDetailId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  
  getCarImagebyCarId(carId: number) {
    this.carImageService.getCarImagebyCarId(carId).subscribe((response) => {
      this.carImageDetail = response.data;
      this.dataLoaded = true;
    });
  }
}
