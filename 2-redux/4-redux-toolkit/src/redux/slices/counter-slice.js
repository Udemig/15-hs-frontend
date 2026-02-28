/*
 ! Slice
 * Hem reducer'ı hem aksiyon tiplerini hem de aksiyon oluşturan fonksiyonları tek noktada oluşturur

 * Nasıl tanımlanır?
 * 1) import {createSlice} from "@reduxj/toolkit"
 * 2) name: slice ismi
 * 3) initialState: başlangıç state'i
 * 4) reducers: aksiyon'ları görev'lerini tanımlıyoruz
  
 ! Not: Reducers içerisinde yazılan fonksiyonlarda klasik redux'tan farklı olarak state'İ doğrudan güncelleyebiliyoruz 
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, theme: "dark" },
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// aksiyon oluşturan fonksiyonlar
export const { increase, decrease, setCount } = counterSlice.actions;

// reducer
export default counterSlice.reducer;
