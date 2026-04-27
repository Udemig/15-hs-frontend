import type { Car } from "../types";

const colors = [
  "imagin-black",
  "imagin-grey",
  "imagin-white",
  "imagin-blue",
  "imagin-yellow",
  "imagin-red",
  "imagin-orange",
  "imagin-green",
];

const getImage = (car: Car, randomColor?: boolean, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  url.searchParams.set("customer", "hrjavascript-mastery");
  url.searchParams.set("make", car.make);
  url.searchParams.set("modelFamily", car.model);
  url.searchParams.set("modelYear", car.year);
  url.searchParams.set("zoomType", "fullscreen");
  url.searchParams.set("paintId", "imagin-white");

  if (randomColor) {
    const index = Math.floor(Math.random() * colors.length);
    url.searchParams.set("paintId", colors[index]);
  }

  if (angle) {
    url.searchParams.set("angle", angle);
  }

  return url.href;
};

export default getImage;
