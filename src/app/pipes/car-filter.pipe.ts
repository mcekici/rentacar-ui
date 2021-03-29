import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/Dtos/carDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDto[], filterText: string): CarDto[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDto)=> 
      c.name.toLocaleLowerCase().indexOf(filterText)!==-1 ||
      c.class.toLocaleLowerCase().indexOf(filterText)!==-1 ||
      c.plate.toLocaleLowerCase().indexOf(filterText)!==-1 ||
      c.modelYear.toString().indexOf(filterText)!==-1 ||
      c.dailyPrice.toString().indexOf(filterText)!==-1 ||
      c.depositFee.toString().indexOf(filterText)!==-1
    ):value;
  }

}
