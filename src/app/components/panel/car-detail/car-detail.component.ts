import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/Dtos/carDto';
import { Car } from 'src/app/models/Entites/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:CarDto;
  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getDto(params["carId"])
    });
  }


  getDto(carId:number){
    this.carService.getDto(carId).subscribe(response=>{
      this.car = response.data;
    })
  }

}
