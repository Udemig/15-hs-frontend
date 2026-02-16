# Memoization

- Bileşenlerin gereksiz yere render edilmesini veya fonksiyonların gereksiz hesaplamlar yapmasını önlemek için kullandığımız performans optimizasyonlarına memoization denir.

## Temel Mantık

- Eğer bir bileşenin veya fonksiyonun girdileri değişmiyorsa (parametre, prop) sonuç değişmez -- o zaman react'ın aynı işlemi yeniden yapmasına gerek olmamalı.

## Yöntemler

1. useMemo()
2. React.memo()
3. useCallback()

## Cache (Önbellek)

- Verilerin daha hızlı erişilebilen bir yerde geçici olarak saklnmısıdır

- **Neden Gerekli?**
- Bir veriyi her seferinde:
- Veritabanın çekme
- API'a tekrar istek atmak
- Aynı hesaplamayı tekrar yapmak yerine
- - Bir kez yapıp sonucu cache'de saklar sonraki hesaplamalarda cache'deki sonucu kullanırız
- - İlk sefer ZOR ---- sonraski sefer çok hızlı

- **Benzetme**
- - İnsan hafızasına birebir benzetebiliriz
- - Birine 14\*50 sonucun sorarasınız tahmini 5 saniyede cevap verir
- - Kısa süre içerisinde aynı kişye aynı soruyu bir daha sorarsanız 1 saniyede kısa sürede cevap verir, hafızasında hala önceki hesaplamanın sonucu olduğu için.
- - Bunun yazılımdaki karşılığı cache'dir.

## useMemo() - Hesaplanmış Değerleri Hatırlamak

- useMemo, yoğun hesaplama yapan fonksiyonların üretikleri sonuçları cache de saklar
- Ve aynı hesaplama tekrar gerektiğinde yeniden hesaplamak yerine cache'de saklanan sonucu kullanır
- Bu da ilk hespalamadan sonraki hesaplamaların sonucunu daha hızlı elde edilmesini sağlar.
- Bu seneryo hesaplamadaki girdiler değişmediği durum için geçerlidir, girdi değişirse hesaplama baştan yapılmalı

## React.memo() - Component Gerekesiz Renderını Önler

- Component'ların aldığı prop değişmediği müddetçe render olmasının önüne
- Kapsayı elementlerin render olduğunda alt elementlerin de render olmasının önüne geçer

## useCallback() - Fonksiyonnun Yeniden Oluşmasını Önler

- Her render sırasında fonksiyonun yeniden oluşturup farklı bir referansa sahip olmasını engellemek istersek useCallback kullanırız.
- useCallback() bağımlılık dizisindeki değer değişmedikçe fonksiyonun yeniden oluşmasını engeller

# Javascript Veri Türlier

1. **Primitve Types**

- Primitive tipler, değerin kendisini tutar.
- Hafızada sabit bir alan kaplar
- Bir değişkene atandığında kopyası oluşturulur (Immutable - Değiştirelemez)
- string, number, boolean, null, undefined, symbol, bigint

2. **Non-Primitive (Referance) Types**

- Referans üzerinde saklanır ve değerleri değiştirebilir
- Billekte değişkenin referansı saklanır
- object, array, function, cLass

```JSX
// arr parametresi ve numbers dizisi aynı referansı paylaştığı için arr dizisini yaptığımız güncelleme numbers dizisine de etki eder
function addItem(arr) {
  arr.push(4);
}

const numbers = [1, 2, 3];
addItem(numbers);

console.log(numbers); // 1, 2, 3, 4,

// ----------------------------------------
// arr ve sayilar dizisi aynı referansı paylaştığı ve sayilar dizisini güncellemek istemediğimiz için güncellemenin referansa etki etmemesi için dizinin bir kopyasını oluşturduk
function addItemSafe(arr) {
  return [...arr, 4];
}

const sayilar = [1, 2, 3];
const yeniSayilar = addItemSafe(sayilar);

console.log(sayilar); // 1, 2, 3
console.log(yeniSayilar); // 1, 2, 3, 4
```
