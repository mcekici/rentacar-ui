import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/panel/category/category.component';
import { NaviComponent } from './components/panel/navi/navi.component';
import { CarComponent } from './components/panel/car/car.component';
import { MenuComponent } from './components/panel/menu/menu.component';
import { FooterComponent } from './components/panel/footer/footer.component';
import { IndexComponent } from './components/panel/index/index.component';
import { CarDetailComponent } from './components/panel/car-detail/car-detail.component';
import { CarAddComponent } from './components/panel/car-add/car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import { UiComponent } from './components/ui/ui.component';
import { LoginComponent } from './components/panel/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    CarComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    CarDetailComponent,
    CarAddComponent,
    PanelComponent,
    UiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
