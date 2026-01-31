# Dizideki Bir Elemanı Güncelleme

## Yol-1: Splice

```jsx
// a) nesneyi güncelle
const updated = { ...found, amount: found.amount + 1 };
// b) güncellenicek elemanın dizideki sırasını bul
const index = basket.findIndex((i) => i.id === found.id);
// c) diziyi kopyaları (state'e doğrudan etki etmemek için)
const copyBasket = [...basket];
// d) splice ile diziyi güncelle
copyBasket.splice(index, 1, updated);
// e) state'i güncelle
setBasket(copyBasket);

// bonus: son 3 adımı birleştirebilirsiniz
setBasket([...basket].splice(index, 1, updated));
```

## Yol-2: Map

```jsx
// a) bulunan ürünün miktarını 1 arttır
const updated = { ...found, amount: found.amount + 1 };

// b) sepet dizisindeki eski ürün yerine güncellenmiş ürünü ekle
const updatedBasket = basket.map((item) => (item.id === updated.id ? updated : item));

// c) sepet state'ini güncelle
setBasket(updatedBasket);
```
