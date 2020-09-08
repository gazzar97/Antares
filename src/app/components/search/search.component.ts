import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cityLocation:string;
  constructor() { }

  ngOnInit(): void {
  }
  onKey(event:any){
    this.cityLocation = event.target.value;
   
  }

}
