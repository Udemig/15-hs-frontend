import type { CarResponse } from "../types";

export const fetchCars = async (): Promise<CarResponse> => {
  let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine=make:"BMW"`;

  const res = await fetch(url);

  return await res.json();
};
