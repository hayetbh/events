import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../Module/event';
import { NgForm } from '@angular/forms';
import {EventService} from '../service/event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(private events: EventService ) { }

  addEvents(f : NgForm){
  console.log(f);
    var event = new Event(f.value.title, f.value.organisateur,f.value.description,
      new Date(f.value.dateDEBUT),new Date(f.value.dateFIN));
    this.events.addEvent(event);
    console.log(event);
  }
  /*validDate(debut,fin): boolean{

  let ddebut= new Date(debut.values);
  let dfin = new Date(fin.values);
  if (dfin>ddebut)
  return true;
  else 
  return false ;
  }*/
  ngOnInit(){
  }
}
