import { DisplayWhetherDataComponent } from './../../components/display-whether-data/display-whether-data.component';
import { CityName } from './../../shared/city-name/city-name';
import { SearchComponent } from './../../components/search/search.component';
import { Component,ViewChild,AfterViewInit, OnInit } from '@angular/core';
import {WeatherServiceService} from './../../services/search/weather-service/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cityLocation:string;
  errorMessage:string;
  currentWeather :any;
  cityData: CityName;
  @ViewChild(SearchComponent) searchInputComponent;
  @ViewChild(DisplayWhetherDataComponent) displayWeatherData;
  constructor(private weatheService:WeatherServiceService){
    this.currentWeather = this.weatheService.getCurrentWeather("Cairo").then(weather=>{
      return weather.json();
    }).then(this.extractDataFromPromise);


    
  
  }

  ngOnInit(): void {
  }
  
  onKey(event:any){
   this.cityLocation = this.searchInputComponent.cityLocation;
   this.currentWeather ={};
   this.currentWeather = this.weatheService.getCurrentWeather(this.cityLocation).then(weather=>{
    return weather.json();
  }).then(this.extractDataFromPromise);

   console.log(this.currentWeather);
   console.log(this.cityLocation);
  }
  extractDataFromPromise(weather){
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;


    let now = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
  
    let datee = document.querySelector('.location .date');
    (datee as HTMLElement).innerText = `${day} ${date} ${month} ${year}`;
    
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp-273.15)} <span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    (weather_el as HTMLElement).innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    (hilow as HTMLElement).innerText = `${Math.round(weather.main.temp_min-273.15)}°c / ${Math.round(weather.main.temp_max-273.15)}°c`;
  }
  
}
