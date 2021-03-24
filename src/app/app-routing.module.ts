import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:IndexComponent},
  {path:"panel/index",component:IndexComponent},
  {path:"panel/cars",component:CarComponent},
  {path:"panel/cars/detail/:carId",component:CarDetailComponent},
  {path:"panel/cars/add",component:CarAddComponent},
  {path:"panel/cars/add/:carId",component:CarAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
