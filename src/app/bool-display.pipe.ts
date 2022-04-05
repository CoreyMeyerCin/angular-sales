import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, lang: string ="en"): string {
    if(lang==="en"){
    return (value) ? "Yes": "No";
    }
    else return (value)? "Oui": "No";
  }

}
