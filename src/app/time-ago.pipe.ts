import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: number, refreshValue: number,...args: unknown[]): string {
    let currenttime = new Date().getTime();
    let diff = Math.round((currenttime-value)/1000);
    return diff + ' seconds ago..';
  }

  

}
