import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  carImages:CarImage[] = [];
  path="https://localhost:44385/Uploads/Images/"
  constructor(private carImageService:CarImageService){}
  ngOnInit(): void {
    this.getCarImage();
  }
  getCarImage(){
    this.carImageService.getCarImage().subscribe((response)=>{
      this.carImages = response.data;
    })
  }
  getImagePath(image:string){
    let newPath = this.path + image
    return newPath
  }

}
