import { Pipe, PipeTransform } from '@angular/core';
import { Serial } from '../models/Entites/Serial';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Serial[], filterText: string): Serial[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((s:Serial)=> 
      s.brandName.toLocaleLowerCase().indexOf(filterText)!==-1 ||
      s.serialName.toLocaleLowerCase().indexOf(filterText)!==-1
    ):value;
  }

}
