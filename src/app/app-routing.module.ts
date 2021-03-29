import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './components/panel/brand-list/brand-list.component';
import { CarAddComponent } from './components/panel/car-add/car-add.component';
import { CarDetailComponent } from './components/panel/car-detail/car-detail.component';
import { CarListComponent } from './components/panel/car-list/car-list.component';
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
    {path:"brands", component:BrandListComponent},
    {path:"cars",component:CarListComponent},
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
