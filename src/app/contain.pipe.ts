import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contain'
})
export class ContainPipe implements PipeTransform {

  transform(likes: any, term: any): any {

     return likes.indexOf(term) > -1 ? 'liked': '';
  }

}
