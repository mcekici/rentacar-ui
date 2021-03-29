import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/models/Entites/brand';
import { Serial } from 'src/app/models/Entites/Serial';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  series: Serial[] = [];
  brands: Brand[] = []
  addForm:FormGroup;
  dataLoaded = false;
  filterText = "";
  edit = false;
  index = 0;
  constructor(
    private brandService:BrandService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.getSeries();
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      console.log(response);
      this.brands = response.data;
    })
  }


  getSeries(){
    this.brandService.getSeries().subscribe(response=>{
      console.log(response);
      this.series = response.data;
      this.dataLoaded = true;
    })
  }

  editChange(id:number){
    this.edit = !this.edit;
    this.index = id;
  }

}
