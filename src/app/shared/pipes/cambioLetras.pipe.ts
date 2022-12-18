import { Pipe, PipeTransform } from '@angular/core';
import { VOWELS } from './../constants/vowels';

@Pipe({
  name: 'cambioLetras',
})
export class CambioLetrasPipe implements PipeTransform {
  transform(value: string): string {
    const newString = value.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, (letter) => VOWELS[letter]);

    return newString;
  }
}
