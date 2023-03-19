export const getCurrentHour = (dt: number) => {
  return new Date(dt * 1000).getHours();
};
