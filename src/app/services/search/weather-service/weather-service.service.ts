import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../../environments/environment'; 
const apiKey:string = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }
  currentWeather: any;
  fullURL:string;
  getCurrentWeather(loc:string){
    this.currentWeather = {};
    this.fullURL = `${environment.apiUrl}/weather?q=${loc}&APPID=${apiKey}`;
    this.currentWeather= fetch(this.fullURL)
    return this.currentWeather;
  }
  
}
