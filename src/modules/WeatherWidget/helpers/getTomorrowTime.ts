export const getTomorrowTime = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 4, 0, 0);
};
