import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  //pure : false causes filter to be reapplied when any data changes. Will have performance issues.
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, propName: string, _filterString: string): unknown {
    const filterString = _filterString.toUpperCase();

    if (value.length === 0 || filterString === 'ALL') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {

      if (item[propName].toUpperCase().indexOf(filterString) > -1) {
        resultArray.push(item);
      }
    }
    return (resultArray);

  }

}
