import { FC, useEffect } from 'react';
import './WeatherWidget.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchWeather } from '../../store/actions/fetchWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import WeatherMaps from '../WeatherMaps/WeatherMaps';
import LocationInput from '../LoactionInput/LocationInput';
import { fetchLocation } from '../../store/actions/fetchLocation';
import { WrapperComponent } from '../../../../components/WrapperComponent/WrapperComponent';
import { getCurrentDate } from '../../helpers/getCurrentDate';

export const WeatherWidget: FC = () => {
  const dispatch = useAppDispatch();
  const { location, isLoading: locationIsLoading } = useAppSelector(
    (state) => state.locationReducer,
  );
  const { weather, isLoading, error, comingWeather } = useAppSelector(
    (state) => state.weatherReducer,
  );

  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeather('', location));
    }
  }, [location]);

  const filteredDailyWeatherData = comingWeather.list
    .filter((item, index, arr) => {
      const date = getCurrentDate(item.dt);
      return index === 0 || getCurrentDate(arr[index - 1].dt) !== date;
    })
    .slice(0, 6);

  const handleLocationChange = (city: string) => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className="d-flex flex-column gap-3">
      <WrapperComponent
        isLoading={isLoading || locationIsLoading}
        error={{
          message: error,
          child: <LocationInput onLocationChange={handleLocationChange} />,
        }}
      >
        <>
          <div className="weather-widget-grid">
            <div className="location-input">
              <LocationInput onLocationChange={handleLocationChange} />
            </div>
            <div className="current-weather">
              {weather && <CurrentWeather weatherData={weather} />}
            </div>
            <div className="weather-maps">
              <WeatherMaps location={location} />
            </div>
          </div>
          <HourlyWeather hourlyWeatherData={comingWeather.list} />
          <DailyWeather dailyWeatherData={filteredDailyWeatherData} />
        </>
      </WrapperComponent>
    </div>
  );
};
