import { WeatherInfoModel } from './WeatherInfoModel';

export interface WeatherModel {
  id: number;
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: WeatherInfoModel[];
  wind: {
    speed: number;
  };
}
