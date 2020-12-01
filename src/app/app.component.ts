import { Component, OnInit, Output , Input, EventEmitter} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Event } from '../app/Module/event';
import{ EventService} from '../app/service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  eventslist: Event[];



  constructor(private events: EventService ) { }
  addEvents(){
    
    this.events.state = 'add';
    
  }
  updateEvents(){
    
    this.events.state = 'update';
    
  }
  deleteEvents(i: number){
    
    this.events.deleteEvent(i);
    
  }
  ngOnInit(): void {
    this.events.initEvent();
    this.eventslist = this.events.getevents();
     }
}








