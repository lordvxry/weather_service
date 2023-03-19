export const getDayOfWeek = (dt: number) =>
  new Date(dt * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
  });
