import { AppDispatch } from '../../../../store/store';
import { getWeather } from '../../api/getWeather';
import { getComingWeather } from '../../api/getComingWeather';
import { LocationInfoModel } from '../../models/LocationInfoModel';
import { weatherSlice } from '../reducers/WeatherSlice';

export const fetchWeather =
  (city: string, location?: LocationInfoModel) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherSlice.actions.weatherFetching());
      const [weatherResponse, comingWeatherResponse] = await Promise.all([
        getWeather(city, location),
        getComingWeather(city, location),
      ]);
      const result = {
        weather: weatherResponse.data,
        comingWeather: comingWeatherResponse.data,
      };
      dispatch(weatherSlice.actions.weatherFetchingSuccess(result));
    } catch (err) {
      dispatch(weatherSlice.actions.weatherFetchingError('Location not found'));
    }
  };
