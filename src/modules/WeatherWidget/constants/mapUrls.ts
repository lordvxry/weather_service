import { stolenApiKey } from './stolenApiKey';

export const mapUrls = [
  {
    name: 'Rain',
    url: `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${stolenApiKey}`,
  },
  {
    name: 'Clouds',
    url: `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${stolenApiKey}`,
  },
  {
    name: 'Pressure',
    url: `https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${stolenApiKey}`,
  },
  {
    name: 'Temperature',
    url: `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${stolenApiKey}`,
  },
  {
    name: 'Wind',
    url: `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${stolenApiKey}`,
  },
  {
    name: 'Snow',
    url: `https://tile.openweathermap.org/map/snow_new/{z}/{x}/{y}.png?appid=${stolenApiKey}`,
  },
];
