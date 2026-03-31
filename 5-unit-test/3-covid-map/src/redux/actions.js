import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetails = createAsyncThunk("detail/getDetails", async (country) => {
  // ülkenin covid verilerini alıcak api isteğini hazırla
  const req1 = axios.get("https://covid-api.com/api/reports", { params: { q: country } });

  // ülke detay verilerini alıcak api isteğini hazırla
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

  // Promise.all: api isteklerini paralel olarak at
  const [res1, res2] = await Promise.all([req1, req2]);

  // api'dan gelen verileri değişkenlere aktar
  const covidData = res1.data.data[0];
  const countryData = res2.data[0];

  // ihtiyacımız olan verileri al
  const payload = {
    fatality_rate: covidData?.fatality_rate,
    confirmed: covidData?.confirmed,
    active: covidData?.active,
    deaths: covidData?.deaths,

    country: countryData?.name?.common,
    contintent: countryData?.region,
    population: countryData?.population,
    capital: countryData?.capital[0],
    flag: countryData?.flags,
    currency: Object.entries(countryData?.currencies)?.[0]?.[1]?.name,
  };

  // aksiyonun payload'ını return et
  return payload;
});
