import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, price, image, type } = action.payload;
      const existingItem = state.items.find((item) => item.id === id && item.type === type);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          type,
          quantity: 1,
        });
      }
    },
    incrementItem: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find((item) => item.id === id && item.type === type);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find((item) => item.id === id && item.type === type);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => !(i.id === id && i.type === type));
        } else {
          item.quantity -= 1;
        }
      }
    },
    removeItem: (state, action) => {
      const { id, type } = action.payload;
      state.items = state.items.filter((item) => !(item.id === id && item.type === type));
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, incrementItem, decrementItem, removeItem, clearBasket } = basketSlice.actions;

// Selectors
export const selectBasketItems = (state) => state.basket.items;

export const selectTotalCount = (state) => {
  return state.basket.items.reduce((sum, item) => sum + item.quantity, 0);
};

export const selectTotalPrice = (state) => {
  return state.basket.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export default basketSlice.reducer;
