import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  sourceLang: { label: "Dili algıla", value: undefined }, // kaynak dil
  targetLang: { label: "English", value: "en" }, // hedef dil
  textToTranslate: "", // çevrilecek metin
  translatedText: "", // çeviri sonucu
  isLoading: false, // çeviri yükleniyor mu
  error: null, // çeviri anında hata oluştu mu
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setSourceLang: (state, { payload }) => {
      state.sourceLang = payload;
    },
    setTargetLang: (state, { payload }) => {
      state.targetLang = payload;
    },
    setText: (state, { payload }) => {
      state.textToTranslate = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(translateText.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(translateText.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.translatedText = payload;
    });
  },
});

export const { setSourceLang, setTargetLang, setText } = translateSlice.actions;

export default translateSlice.reducer;
