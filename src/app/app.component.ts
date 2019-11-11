import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Config } from './interfaces/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lastMeteo';
  cityList: any[];
  config: Config;
  storedPlace = ['Baziege', 'Tombouctou', 'delhi'];
  // initDay: number;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.cityList = this.weatherService.cityList;

    for (let i = 0; i < this.storedPlace.length; i++) {
      this.weatherService.getForecastDay(this.storedPlace[i]).subscribe(data => {

        let arrayForecast: any[] = [];

        for (let j = 0; j < 24; j++) {
          let val = {
            timestamp: ((data as any).list[j].dt*1000 ),
            description: (data as any).list[j].weather[0].description,
            temp: Math.round((data as any).list[j].main.temp),
            humidity: (data as any).list[j].main.humidity,
            currentWeather: (data as any).list[j].weather[0].main,
            windSpeed: Math.round((data as any).list[j].wind.speed),
            windOrientation: (data as any).list[j].wind.deg,
            icon: this.weatherService.getWeatherIcon((data as any).list[j].weather[0].icon),
          };
          arrayForecast.push(val);
        }

        this.config = {
          name: (data as any).city.name,
          sunrise: (data as any).city.sunrise*1000,
          sunset: (data as any).city.sunset*1000,
          forecast: arrayForecast
        };
        this.cityList.push(this.config);
        console.log(data)
      });
    }
    
  }
}
