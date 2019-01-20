import { Injectable } from '@angular/core';
import { Serie } from './serie';
import { SERIES } from './mock-series';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private messageService: MessageService) { }

  getSeries(): Observable<Serie[]> {
    this.messageService.add('SerieService: fetched series');
    return of(SERIES);
  }


}
