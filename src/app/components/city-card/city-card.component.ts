import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})

export class CityCardComponent implements OnInit {

  cityList: any[];
  currentDay: number = 0;

  @Input() cityName: string;
  @Input() sunrise: number;
  @Input() sunset: number;
  @Input() forecast: any[];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.cityList = this.weatherService.cityList;
    console.log(this.cityList)

  }

  getWindImage(angle){
    return 'transform: rotate('+ angle +'deg)';
  }

  isNewDay(){
    return '<tr>test</tr>';
  }
}
