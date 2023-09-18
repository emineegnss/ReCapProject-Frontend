import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car/car-detail.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDetailComponent},
  {path:"cars",component:CarDetailComponent},
  {path:"cars/brand/:brandId",component:CarDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
