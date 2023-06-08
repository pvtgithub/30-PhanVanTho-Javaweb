import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styleColor'
})
export class StyleColorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}
