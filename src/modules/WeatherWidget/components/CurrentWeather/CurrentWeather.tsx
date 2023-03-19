import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherModel } from '../../models/WeatherModel';
import { getWeatherIcon } from '../../helpers/getWeatherIcon';
import { getTemperature } from '../../helpers/getTemperature';
import { getIconStyle } from '../../helpers/getIconStyle';

interface Props {
  weatherData: WeatherModel;
}

const CurrentWeather: FC<Props> = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;

  return (
    <Card className="h-100">
      <Card.Header>
        <FontAwesomeIcon icon="location-dot" />
        <span> {name}</span>
      </Card.Header>
      <Card.Body>
        <div className="mb-3">
          <FontAwesomeIcon
            icon={getWeatherIcon(weather[0].main)}
            className={getIconStyle(weather[0].main)}
            size="2x"
          />
          <span className="ms-2 display-4">{getTemperature(main.temp)}</span>
        </div>
        <div className="mb-3">
          <span className="fw-bold me-1">Feels like:</span>
          <span className="me-1">{getTemperature(main.feels_like)},</span>
          <span className="fw-bold">{weather[0].description}</span>
        </div>
        <div className="mb-3">
          <span className="fw-bold me-1">Wind:</span>
          <span>{wind.speed.toFixed(0)} м/с</span>
        </div>
        <div className="mb-3">
          <span className="fw-bold me-1">Humidity:</span>
          <span>{main.humidity}%</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CurrentWeather;
