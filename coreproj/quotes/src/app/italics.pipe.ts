import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'italics'
})
export class ItalicsPipe implements PipeTransform{
  transform(value: any){
    return value.italics()
  }
}
