import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    return value.substr(0, limit) + '...';
  }

}
