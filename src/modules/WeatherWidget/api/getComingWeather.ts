import axios from 'axios';
import { apiKey } from '../constants/apiKey';
import { ComingWeatherModel } from '../models/ComingWeatherModel';
import { LocationInfoModel } from '../models/LocationInfoModel';

export const getComingWeather = async (city: string, location?: LocationInfoModel) => {
  const { latitude = 0, longitude = 0 } = location ?? {};

  const url = city
    ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    : `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  return axios.get<ComingWeatherModel>(url);
};
