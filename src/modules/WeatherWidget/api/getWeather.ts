import axios from 'axios';
import { WeatherModel } from '../models/WeatherModel';
import { apiKey } from '../constants/apiKey';
import { LocationInfoModel } from '../models/LocationInfoModel';

export const getWeather = async (city: string, location?: LocationInfoModel) => {
  const { latitude = 0, longitude = 0 } = location ?? {};

  const url = city
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  return axios.get<WeatherModel>(url);
};
