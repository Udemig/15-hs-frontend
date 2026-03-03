import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

const params = {
  south: "33.925281",
  west: "22.546237",
  north: "44.181115",
  east: "50.039604",
  limit: "300",
};

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // api'dan türkye üzerindeki uçuş verilerini al
  const res = await api.get("/list-in-boundary", { params });

  // aksiyonun payload'ını return et
  return res.data.flightsList;
});
