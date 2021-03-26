import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/panel/car-add/car-add.component';
import { CarDetailComponent } from './components/panel/car-detail/car-detail.component';
import { CarComponent } from './components/panel/car/car.component';
import { LoginGuard } from './components/panel/guards/login.guard';
import { IndexComponent } from './components/panel/index/index.component';
import { LoginComponent } from './components/panel/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { UiComponent } from './components/ui/ui.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:UiComponent},
  {path:"panel/login",component:LoginComponent},
  {path:"panel",component:PanelComponent, canActivate:[LoginGuard], children:[
    {path:"",component:IndexComponent},
    {path:"index",component:IndexComponent},
    {path:"cars",component:CarComponent},
    {path:"cars/detail/:carId",component:CarDetailComponent},
    {path:"cars/add",component:CarAddComponent},
    {path:"cars/add/:carId",component:CarAddComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
