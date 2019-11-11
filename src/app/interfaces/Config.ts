export interface Config {
    name: string;
    sunrise: number;
    sunset: number;
    forecast: Array<Forecast>;    
}

export interface Forecast {
    timestamp: number;
    temp: number;
    humidity: number;
    description: string;
    windSpeed: number;
    windOrientation: number;
    currentWeather: string;
    icon: string;
}