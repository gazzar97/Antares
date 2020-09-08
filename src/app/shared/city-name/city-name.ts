import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn:'root'
    }


)

export class CityName {
    private cityName: string;

    setCityName(city_name){
        this.cityName=city_name;
    }
    getCityName(){
        return this.cityName;
    }
}
