import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'Italics'
})
export class ItalicsPipe implements PipeTransform{
  transform(value: any){
    return value.italics()
  }
}
