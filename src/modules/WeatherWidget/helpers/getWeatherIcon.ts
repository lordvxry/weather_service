export const getWeatherIcon = (weather: string) => {
  switch (weather) {
    case 'Clear':
      return 'sun';
    case 'Clouds':
      return 'cloud';
    case 'Rain':
      return 'cloud-rain';
    case 'Snow':
      return 'snowflake';
    case 'Mist':
      return 'smog';
    default:
      return 'sun';
  }
};
