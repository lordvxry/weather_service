import { WeatherInfoModel } from './WeatherInfoModel';

export interface ComingWeatherInfo {
  dt: number;
  weather: WeatherInfoModel[];
  pop: number;
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}

export interface ComingWeatherModel {
  list: ComingWeatherInfo[];
}
