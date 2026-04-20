// Fonksiyonlarda olduğu gini generic yapısını yeniden kullanaiblir type/interface yazmak için de kullanabiliriz

type ArrayType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const arrayObject: ArrayType<string> = {
  items: ["a", "b", "c"],

  addItem(newItem) {
    arrayObject.items.push(newItem);
  },

  getItem(index) {
    return arrayObject.items[index];
  },
};

// İsimlendirme
// Generic isimlendiriken genelde tek harf kullanılır
// T: Type
// K: Key
// V: Value
// E: Error / Element
// R: Return Type
// S: State

interface IPerson<T, K> {
  name: T;
  age: K;
  id: K;
  father: T;
  mother: T;
}

const foo: IPerson<string, number> = {
  name: "Ali",
  age: 453,
  id: 23234,
  father: "Ahmet",
  mother: "Ayşe",
};

// Proje içerisinde generic kullanımı:
// Seneryo: İki farklı API isteği attık ve gelen yanıtların tipini tanımlayacağız
// Tip tanımındaki kod tekrarını engellemek için generic kullanıcaz

interface IQuote {
  id: number;
  quote: string;
  author: string;
}

interface IRecipe {
  id: number;
  name: string;
  cuisine: string;
}

interface APIResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

const quoteResponse: APIResponse<IQuote> = {
  data: [{ id: 1, quote: "If You Can'T Make It Good, At Least Make It Look Good.", author: "Bill Gates" }],
  total: 60,
  page: 2,
  limit: 20,
};

const recipeResponse: APIResponse<IRecipe> = {
  data: [{ id: 1, name: "Margarita Pizza", cuisine: "Italian" }],
  total: 240,
  page: 1,
  limit: 10,
};
