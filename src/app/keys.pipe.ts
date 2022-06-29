import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  transform(value: string): string[] {
    const keys = Object.keys(value);
    return keys;
  }
}
