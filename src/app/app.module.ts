import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EditComponent } from './edit/edit.component';
import { EventService } from './service/event.service';

@NgModule({
  declarations: [
    AppComponent ,
    EventComponent ,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }



