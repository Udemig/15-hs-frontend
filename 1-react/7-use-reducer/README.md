# Bracket Notation

```jsx
const App = () => {
  // nesne
  const user = {
    name: "Faruk",
    age: 27,
    "ev-adresi": "İstanbul",
  };
  const arr = ["a", "b", "c", "d"];

  // Nesne içerisindeki veriye erişme
  // 1) dot notation
  user.name;

  // 2) bracket notation
  user["name"];

  // a) özel karakter varsa: bracket kullanılmalı
  user["ev-adresi"];

  // b) dinamik olan bir key değerine erişilecekse: bracket kullanılmalı
  const key = "ev-adresi";
  user[key];

  // c) dizilere erişmek için
  arr[3];

  return (
    <div>
      <h1>{user.name}</h1>

      <h1>{user["age"]}</h1>

      <h1>{user["ev-adresi"]}</h1>
    </div>
  );
};
```

# useReducer

- State yönetimi için kullanılan bir hook'tur. Karmaşık veya birden fazla değeri olan state yönetimini tek bir reducer fonksiyonun toplayıp bileşenlerden dışarıya taşımamıza olanak sağlar

- useState ile state yönetiminin karmaşıklaştığı noktada useReducer tercih ederiz

1. Action - Eylem

- State'in nasıl değişiceğini ifade eden nesnelerdir
- type ve payload değerlerine sahiptir
- type: EKLE, SİL, GÜNCELLE, YÜKLE, TEMA_DEĞİŞ
- payload (opsiyonel): eylemin gerçekleşmesi için gerekli detaylar
- örn: {type:"TEMA_DEĞİŞ}
- örn: {type:"SİL", payload:78}

2. Dispatch - Sevk Etmek

- Action'u reducer fonksiyonuna göndermeye yarar
- örn: `dispatch({type:"TEMA_DEĞİŞ"})`

3. Reducer Fonksiyon

- State'in nasıl değişeceğine karar verir
- Action'lar dispatch edildiği zaman reducer fonksiyonu bunları görür ve dispatch edilen aksiyona göre state'in nasıl değişceğine karar verir
