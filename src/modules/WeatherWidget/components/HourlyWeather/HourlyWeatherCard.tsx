import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { getCurrentHour } from '../../helpers/getCurrentHour';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherIcon } from '../../helpers/getWeatherIcon';
import { getTemperature } from '../../helpers/getTemperature';
import { ComingWeatherInfo } from '../../models/ComingWeatherModel';
import { getIconStyle } from '../../helpers/getIconStyle';

interface Props {
  weatherDayInfo: ComingWeatherInfo;
}

const HourlyWeatherCard: FC<Props> = ({ weatherDayInfo }) => {
  const { dt, weather, main, pop, wind } = weatherDayInfo;

  return (
    <div className="mx-2 my-3">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            {getCurrentHour(dt)}:00{' '}
            <FontAwesomeIcon
              icon={getWeatherIcon(weather[0].main)}
              className={getIconStyle(weather[0].main)}
            />
          </Card.Title>
          <Card.Text>{getTemperature(main.temp)}</Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon="wind" /> {wind.speed.toFixed(0)} м/с
          </Card.Text>
          <Card.Text>{Math.round(pop * 100)}% chance of rain</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HourlyWeatherCard;
