import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(cityes: hw1.City[], isCIS: boolean): any {
    if(isCIS == null){
      return cityes;
    }else {
      //first method
      return cityes.filter(city => `${city.isCIS}`.toString() == isCIS.toString());
      //second method
      // return cityes.filter(function (city) {
      //   if(city.isCIS == isCIS){
      //     return city;
      //   }
      // });
    }
  }
}
