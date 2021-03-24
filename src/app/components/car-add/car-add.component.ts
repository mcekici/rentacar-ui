import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validator, Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Entites/brand';
import { Car } from 'src/app/models/Entites/car';
import { Category } from 'src/app/models/Entites/category';
import { Color } from 'src/app/models/Entites/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CategoryService } from 'src/app/services/category.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  addForm:FormGroup;
  car:Car;
  brands: Brand[] = [];
  modelYears:number[]=[];
  categories:Category[] = [];
  colors:Color[]=[];
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private carService:CarService,
    private brandService:BrandService,
    private categoryService:CategoryService,
    private colorService:ColorService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCar(params["carId"])
    });
    this.getAllBrands();
    this.getAllCategories();
    this.getAllColors();
    for (let index = 1990; index < 2021; index++) {
      this.modelYears.push(index);
    }
  }

  getCar(carId:number){
    this.carService.get(carId).subscribe(response=>{
      this.car = response.data
      console.log(this.car)
    })
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      categoryId:["",Validators.required],
      brandId:["",Validators.required],
      name:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      depositFee:["",Validators.required],
      description:["",Validators.required],
    })
  }

  getAllBrands(){
    this.brandService.getAll().subscribe(response=>{
      this.brands = response.data
      console.log(this.brands)
    })
  }

  getAllCategories(){
    this.categoryService.getAll().subscribe(response=>{
      this.categories = response.data
      console.log(this.categories)
    })
  }

  getAllColors(){
    this.colorService.getAll().subscribe(response=>{
      this.colors = response.data
      console.log(this.colors)
    })
  }
}
