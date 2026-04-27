import type { Car } from "../types";

const formatData = (car: Car): [string, string | number | null][] => {
  // nesne içerisinedn filtrelmek istediğim anahtar değerleri
  const accepted = [
    "make",
    "model",
    "year",
    "fueltype",
    "cylinders",
    "drive",
    "trany",
    "vclass",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atytype",
  ];

  // nesneyi dizi formatına çevirip istediğimiz değerleri aldık
  return Object.entries(car).filter(([key]) => accepted.includes(key));
};

export default formatData;
