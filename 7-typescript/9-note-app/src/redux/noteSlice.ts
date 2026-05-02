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
  },
});

export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
