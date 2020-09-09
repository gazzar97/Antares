import { Component,Output, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-display-whether-data',
  templateUrl: './display-whether-data.component.html',
  styleUrls: ['./display-whether-data.component.css']
})
export class DisplayWhetherDataComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  @Input() cityName:string;
  countryName:string;
}
