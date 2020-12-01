import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm , NgModel} from '@angular/forms';
import { Event } from '../Module/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {


constructor(private events: EventService ) { }
  
  updateEvents(f : NgForm){

  console.log(f);
    var event = new Event(f.value.title, f.value.organisateur,f.value.description,
      new Date(f.value.dateDEBUT),new Date(f.value.dateFIN));
    
      //this.events.updateEvent(i,event);
    
  }
  ngOnInit(){
    
    //this.events.getEvent(this.i);
    
  }
}
