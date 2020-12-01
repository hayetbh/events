import { Injectable } from '@angular/core';

import { Event} from '../Module/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  state: string;
  eventsList: Event[];
  constructor() { }
  initEvent(){
    this.eventsList =[
      new Event('hhh','hsfs',
      'gqqqgqfffgd',
      new Date('12/02/2020'),
      new Date('25/02/2020'),
      ),
    ];
    this.state="";
  }
  //ALL EVENTS
  getevents(): Event[]{
    return(this.eventsList);
  }
  //UN EVENT
 getEvent(indice: number): Event{
   return this.eventsList[indice];
  }

  addEvent(event: Event) {
    this.eventsList.push(event);
    this.state="";
  }
  updateEvent(indice: number , event: Event){
    this.eventsList[indice] = event;
    this.state="";
  }
  deleteEvent(indice: number){
    this.eventsList.splice(indice, 1);
  }
}
