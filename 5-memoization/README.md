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
