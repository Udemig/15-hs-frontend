import basketReducer, {
  addItem,
  incrementItem,
  decrementItem,
  removeItem,
  clearBasket,
  selectBasketItems,
  selectTotalCount,
  selectTotalPrice,
} from "./basketSlice";
import { mockBasketItems } from "../utils/constants";

describe("basketSlice", () => {
  const initialState = { items: [] };

  it("başlangıç state'i boş bir items dizisi döndürür", () => {
    expect(basketReducer(undefined, { type: "@@INIT" })).toEqual(initialState);
  });

  describe("addItem", () => {
    it("sepette olmayan ürünü quantity 1 olarak ekler", () => {
      const payload = {
        id: "1",
        name: "Vanilya Rüyası",
        price: 149.9,
        image: "vanilya.jpg",
        type: "Külah",
      };

      const state = basketReducer(initialState, addItem(payload));

      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toEqual({ ...payload, quantity: 1 });
    });

    it("aynı id ve aynı type'a sahip ürün eklenirse quantity arttırılır", () => {
      const existingState = {
        items: [{ id: "1", name: "Vanilya Rüyası", price: 149.9, image: "vanilya.jpg", type: "Külah", quantity: 1 }],
      };

      const state = basketReducer(
        existingState,
        addItem({ id: "1", name: "Vanilya Rüyası", price: 149.9, image: "vanilya.jpg", type: "Külah" })
      );

      expect(state.items).toHaveLength(1);
      expect(state.items[0].quantity).toBe(2);
    });

    it("aynı id fakat farklı type'a sahip ürün yeni bir kalem olarak eklenir", () => {
      const existingState = {
        items: [{ id: "1", name: "Vanilya Rüyası", price: 149.9, image: "vanilya.jpg", type: "Külah", quantity: 1 }],
      };

      const state = basketReducer(
        existingState,
        addItem({ id: "1", name: "Vanilya Rüyası", price: 149.9, image: "vanilya.jpg", type: "Kap" })
      );

      expect(state.items).toHaveLength(2);
      expect(state.items[1].type).toBe("Kap");
      expect(state.items[1].quantity).toBe(1);
    });
  });

  describe("incrementItem", () => {
    it("eşleşen ürünün quantity değerini bir arttırır", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, incrementItem({ id: "1", type: "Külah" }));

      expect(state.items[0].quantity).toBe(3);
      expect(state.items[1].quantity).toBe(1);
    });

    it("eşleşen ürün yoksa state değişmez", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, incrementItem({ id: "999", type: "Külah" }));

      expect(state.items[0].quantity).toBe(2);
      expect(state.items[1].quantity).toBe(1);
    });
  });

  describe("decrementItem", () => {
    it("quantity 1'den büyükse quantity değerini bir azaltır", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, decrementItem({ id: "1", type: "Külah" }));

      expect(state.items).toHaveLength(2);
      expect(state.items[0].quantity).toBe(1);
    });

    it("quantity 1 ise ürünü sepetten çıkarır", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, decrementItem({ id: "2", type: "Kap" }));

      expect(state.items).toHaveLength(1);
      expect(state.items.find((i) => i.id === "2")).toBeUndefined();
    });

    it("eşleşen ürün yoksa state değişmez", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, decrementItem({ id: "999", type: "Külah" }));

      expect(state.items).toHaveLength(2);
      expect(state.items[0].quantity).toBe(2);
    });
  });

  describe("removeItem", () => {
    it("eşleşen id ve type'a sahip ürünü sepetten kaldırır", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, removeItem({ id: "1", type: "Külah" }));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].id).toBe("2");
    });

    it("sadece id eşleşir fakat type eşleşmezse ürün kaldırılmaz", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, removeItem({ id: "1", type: "Kap" }));

      expect(state.items).toHaveLength(2);
    });
  });

  describe("clearBasket", () => {
    it("sepetteki tüm ürünleri temizler", () => {
      const state = basketReducer({ items: [...mockBasketItems] }, clearBasket());

      expect(state.items).toEqual([]);
    });
  });

  describe("selectors", () => {
    const rootState = { basket: { items: mockBasketItems } };

    it("selectBasketItems sepetteki ürünleri döndürür", () => {
      expect(selectBasketItems(rootState)).toEqual(mockBasketItems);
    });

    it("selectTotalCount toplam ürün miktarını döndürür", () => {
      expect(selectTotalCount(rootState)).toBe(3);
    });

    it("selectTotalPrice toplam fiyatı döndürür", () => {
      expect(selectTotalPrice(rootState)).toBeCloseTo(464.7, 2);
    });

    it("sepet boşken selectTotalCount ve selectTotalPrice 0 döndürür", () => {
      const emptyState = { basket: { items: [] } };
      expect(selectTotalCount(emptyState)).toBe(0);
      expect(selectTotalPrice(emptyState)).toBe(0);
    });
  });
});
