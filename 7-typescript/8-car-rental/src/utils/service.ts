import type { CarResponse } from "../types";

export const fetchCars = async (make: string, model: string, year: string): Promise<CarResponse> => {
  let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20`;

  if (make) {
    url += `&refine=make:"${make}"`;
  }

  if (model) {
    url += `&refine=model:"${model}"`;
  }

  if (year) {
    url += `&refine=year:"${year}"`;
  }

  const res = await fetch(url);

  return await res.json();
};
