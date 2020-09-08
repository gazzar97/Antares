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
    if (this.opened==true){
      document.getElementById('btn-navbar').style.display = "none";
      document.getElementById('text-navbar').style.display = "none";
    }
    if(this.opened==false){
      document.getElementById('btn-navbar').style.display = "block";
      document.getElementById('text-navbar').style.display = "block";
    }
  }


}
