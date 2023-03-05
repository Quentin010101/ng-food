import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceList'
})
export class SentenceListPipe implements PipeTransform {

  transform(value: string | null): string[] {
    if(value){
      return value.split(/[.?!]/).filter(sentence => sentence );
    }
    return []
  }

}
