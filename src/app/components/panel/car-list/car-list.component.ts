import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/Dtos/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: CarDto[] = [];
  dataLoaded = false;
  filterText = "";
  constructor(
    private carService:CarService
    ) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.carService.getAllDto().subscribe(response=>{
      console.log(response);
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

}
