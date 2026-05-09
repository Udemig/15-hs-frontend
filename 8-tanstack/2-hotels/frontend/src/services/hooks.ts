import type { FilterParams, PlaceFormValues, PlaceResponse, PlacesResponse } from "./../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Custom Hook
export const useGetPlaces = (params: FilterParams) =>
  useQuery({
    queryKey: ["places", params],
    queryFn: () => api.get<PlacesResponse>("/places", { params }),
    select: (r) => r.data.places,
  });

export const useGetPlace = (id?: string) =>
  useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`),
    select: (res) => res.data.place,
    enabled: !!id,
  });

export const useDeletePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    onSuccess: () => {
      toast.success("Konaklama alanı kaldırıldı");
      navigate("/");
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};

export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: PlaceFormValues) => api.post("/places", data),
    onSuccess: (res) => {
      toast.success("Yeni konaklama alanı oluşturuldu");

      navigate(`/place/${res.data.place.id}`);
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};
