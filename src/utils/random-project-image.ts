/* public/images/projects holds 1.svg … 25.svg, so the range must match it */
const PROJECT_IMAGES_AMOUNT = 25;

export const getRandomProjectImage = (): string => {
  const randomNumber = getRandomNumberBetweenRange(1, PROJECT_IMAGES_AMOUNT);
  return `/images/projects/${randomNumber}.svg`;
};

const getRandomNumberBetweenRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
