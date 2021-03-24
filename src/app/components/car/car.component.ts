import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/Dtos/carDto';
import { Brand } from 'src/app/models/Entites/brand';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDto[] = [];
  dataLoaded = false;
  constructor(
    private carService:CarService
    ) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.carService.getAllDto().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

}
