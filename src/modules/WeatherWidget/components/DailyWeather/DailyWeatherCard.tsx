import { FC, memo } from 'react';
import { Card, Col } from 'react-bootstrap';
import { getDayOfWeek } from '../../helpers/getDayOfWeek';
import { getDate } from '../../helpers/getDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherIcon } from '../../helpers/getWeatherIcon';
import { getTemperature } from '../../helpers/getTemperature';
import { ComingWeatherInfo } from '../../models/ComingWeatherModel';
import { getIconStyle } from '../../helpers/getIconStyle';

interface Props {
  weatherDayInfo: ComingWeatherInfo;
}

const DailyWeatherCard: FC<Props> = memo(({ weatherDayInfo }) => {
  const { dt, weather, wind, pop, main } = weatherDayInfo;

  return (
    <Col key={`daily_weather_${dt}`}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            {getDayOfWeek(dt)}, {getDate(dt)}
          </Card.Title>
          <FontAwesomeIcon
            icon={getWeatherIcon(weather[0].main)}
            className={getIconStyle(weather[0].main)}
            size="4x"
          />
          <Card.Text>{getTemperature(main.temp)}</Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon="long-arrow-alt-up" /> {getTemperature(main.temp_max)}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon="long-arrow-alt-down" /> {getTemperature(main.temp_min)}
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon="wind" /> {wind.speed.toFixed(0)} м/с
          </Card.Text>
          <Card.Text>{Math.round(pop * 100)}% chance of rain</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
});

DailyWeatherCard.displayName = 'DailyWeatherCard';

export default DailyWeatherCard;
