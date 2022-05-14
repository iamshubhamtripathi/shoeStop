import { Pipe, PipeTransform } from '@angular/core';

enum category { "Loafers", "Slingbacks", "High heels" };

@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {

  transform(value: number): string {
    return category[value];
  }

}
