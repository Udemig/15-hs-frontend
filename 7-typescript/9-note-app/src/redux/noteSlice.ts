import { createSlice } from "./../../node_modules/@reduxjs/toolkit/src/createSlice";
import type { Note, NoteValues } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = { notes: [] };

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteValues>) => {
      // note'a id ekle
      const newNote: Note = {
        id: v4(),
        ...action.payload,
      };

      // notu diziye ekle
      state.notes.push(newNote);
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      // kaldırılcak elemanın sırasını bul
      const index = state.notes.findIndex((note) => note.id === action.payload);

      // diziden elemanı kaldır
      state.notes.splice(index, 1);
    },

    updateNote: (state, action: PayloadAction<{ id: string; values: NoteValues }>) => {
      // düzenlenicek elemanın sırasını bul
      const index = state.notes.findIndex((n) => n.id === action.payload.id);

      // dizideki sırası bilenen elemanı güncelle
      state.notes[index] = { id: action.payload.id, ...action.payload.values };
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
