import { Component, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Antares';
  opened = false;
  constructor(@Inject(DOCUMENT) document){}

  toggleClick(){
    
    this.opened=!this.opened;
    
  }


}
