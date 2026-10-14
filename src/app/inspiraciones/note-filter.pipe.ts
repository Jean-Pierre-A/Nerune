import { Pipe, PipeTransform } from '@angular/core';

interface Nota {
  icon: string;
  name: string;
  type: 'top' | 'heart' | 'base';
}

@Pipe({
  name: 'noteFilter',
  standalone: true
})
export class NoteFilterPipe implements PipeTransform {
  transform(notes: Nota[], type: 'top' | 'heart' | 'base'): Nota[] {
    return notes.filter(n => n.type === type);
  }
}
