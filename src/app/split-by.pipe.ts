import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitBy'
})
export class SplitByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(args)[0];;
  }

}
