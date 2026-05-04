import type { PlacesResponse } from "./../types";
import { useQuery } from "@tanstack/react-query";
import api from "./api";

// Custom Hook
export const useGetPlaces = () =>
  useQuery({
    queryKey: ["places"],
    queryFn: () => api.get<PlacesResponse>("/places"),
    select: (r) => r.data.places,
  });
