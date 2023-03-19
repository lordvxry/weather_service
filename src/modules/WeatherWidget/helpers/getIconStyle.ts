export const getIconStyle = (weather: string) => {
  switch (weather) {
    case 'Clear':
      return 'sun-icon';
    case 'Clouds':
      return 'cloud-icon';
    case 'Snow':
      return 'snow-icon';
    default:
      return 'cloud-icon';
  }
};
