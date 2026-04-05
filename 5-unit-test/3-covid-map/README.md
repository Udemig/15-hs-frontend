# Kütüphaneler

- axios
- react-router-dom
- react-icons
- tailwindcss
- millify
- react-simple-maps
- @reduxjs/toolkit
- react-redux
- react-testing-library
- jest

# Kaynaklar

- İstatistik API: https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics
- Ülke Covid API: https://covid-api.com/api/

# Test Yazma Zamanı

- Önce Proje Sonra Testleri
- Adım adım ilerle
- - önce bileşen sonra test
- - önce test sonra bileşen

# TDD - Test Driven Development

- Test güdümlü geliştirme, yazılım geliştirme sürecinde testlerin koddan önce yazıldığı bir tekniktir
- red to green test olarak diyede geçer

1. Test Yaz: İstenen özellikler için önce testler yazılır
2. Test Çalıştır: Testler başarısız olur
3. Kod Yaz: Testleri geçicek minimum kodu yaz
4. Test Çalıştır: Tüm testleri geçtiğini kontrol et
5. Refactor: Kodu iyileştir, testlerin hala geçmesi gerekir

# Selector Anatomisi

- Selector, test ortamında renderlanan elementleri almak için kullandığımız methodlardır.
- Seçiciler 3 ana parçadan oluşur

1. Yöntem

- _get_: ekrandaki elementi alır, element bulunamazsa hata verir
- - ekranda olduğunu bildiğimiz elementleri almak için kullanırız

- _query_: ekrandaki elementi alır, element bulunamazsa hata vermez ve null döndürür
- - elementin ekranda olmadığını kontrol etmek istediğimiz zaman kullanırız

- _find_: ekrana asenkron olak basılan elementleri almak için kullanırız
- - eğer api isteğinin ardından ekrana basılan elementi almak istiyorsak kullanırız

2. All İfadesi (Opsiyonel)

- Eğerki ekranda aynı koşula uyan birden fazla element varsa ve hepsini almak istiyorsak kullandığımız yöntemin devamına `All` ifadesi ekleriz
- All ifadesini kullanırsak dönen cevap her zaman bir dizi olur.
- `getAllby` `queryAllBy` `findAllBy`

3. Sorgu

- Hangi yöntemle elementi seçiceğimizi belirleyen methodlardır.
- ByRole
- ByText
- ByTestId
- ByAltText
- ByTitle
- ByDisplayValue
- ByPlaceholderText
- ByLabel

- Artık yukarıdaki 3 parçayı isteidğimiz gibi birleştirebiliriz
- `queryByTitle` | `findAllByText` | `getAllByTestId`
