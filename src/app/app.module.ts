import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/panel/category/category.component';
import { NaviComponent } from './components/panel/navi/navi.component';
import { MenuComponent } from './components/panel/menu/menu.component';
import { FooterComponent } from './components/panel/footer/footer.component';
import { IndexComponent } from './components/panel/index/index.component';
import { CarDetailComponent } from './components/panel/car-detail/car-detail.component';
import { CarAddComponent } from './components/panel/car-add/car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import { UiComponent } from './components/ui/ui.component';
import { LoginComponent } from './components/panel/login/login.component';
import { CarListComponent } from './components/panel/car-list/car-list.component';
import { BrandListComponent } from './components/panel/brand-list/brand-list.component';
import { BrandAddComponent } from './components/panel/brand-add/brand-add.component';
import { BrandDetailComponent } from './components/panel/brand-detail/brand-detail.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    CarDetailComponent,
    CarAddComponent,
    PanelComponent,
    UiComponent,
    LoginComponent,
    CarListComponent,
    BrandListComponent,
    BrandAddComponent,
    BrandDetailComponent,
    CarFilterPipe,
    BrandFilterPipe
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
