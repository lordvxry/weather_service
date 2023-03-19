import { FC, useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { ComingWeatherInfo } from '../../models/ComingWeatherModel';
import { getTomorrowTime } from '../../helpers/getTomorrowTime';
import HourlyWeatherCard from './HourlyWeatherCard';

interface Props {
  hourlyWeatherData: ComingWeatherInfo[];
}

const HourlyWeather: FC<Props> = ({ hourlyWeatherData }) => {
  const filteredHourlyWeatherData = useMemo(() => {
    return hourlyWeatherData.filter((item) => {
      const dt = new Date(item.dt * 1000);
      return dt < getTomorrowTime();
    });
  }, [hourlyWeatherData]);

  return (
    <Card>
      <Card.Header>
        <h5>Hourly Weather</h5>
      </Card.Header>
      <Card.Body>
        <div className="d-flex flex-nowrap overflow-auto">
          {filteredHourlyWeatherData.map((dayInfo) => {
            return <HourlyWeatherCard key={dayInfo.dt} weatherDayInfo={dayInfo} />;
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default HourlyWeather;
