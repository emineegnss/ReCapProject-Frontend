import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  carImages:CarImage[] = [];
  carDetails: CarDetail[]=[];
  imageOfPath:string;

  dataLoaded = false;
  imageUrl='https://localhost:44385/Uploads/Images/';
  carImage:CarImage[]=[];
  constructor(
    private carServices: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      }else if(params['colorId']){
        this.getCarsByColor(params['colorId']);
      }else if(params['carId']){
        this.getCarsById(params['carId'])
      }
       else {
        this.getCars();
        this.getCarImage
      }
    });
  }

  getCars() {
    this.carServices.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsById(carId:number) {
    this.carServices.getCarsById(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carServices.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId: number) {
    this.carServices.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarImage(){
    this.carImageService.getCarImage().subscribe((response)=>{
      this.carImages = response.data;
    })
  }
  getImagePath(image:string){
    let newPath = this.imageUrl + image
    return newPath
  }
}
