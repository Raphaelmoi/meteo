import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Config } from '../interfaces/Config';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {

  apiKey: string = '8c63136abbb30e6383947cb5a7dbc58d';
  cityList = [];

  constructor(private http: HttpClient) {
  }

  // getDataForThisCity(city: string){
  //   let base = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + this.apiKey + '&units=metric&&lang=fr';
  //   return this.http.get(base);
  // }
  getWeatherIcon( icon){
    return 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
  }

  getForecastDay(city){
    let base = 'http://api.openweathermap.org/data/2.5/forecast?q='+ city +'&APPID=' + this.apiKey + '&units=metric&&lang=fr';
    return this.http.get(base);
  }
}