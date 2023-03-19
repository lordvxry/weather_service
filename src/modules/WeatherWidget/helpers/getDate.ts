export const getDate = (dt: number) =>
  new Date(dt * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });
