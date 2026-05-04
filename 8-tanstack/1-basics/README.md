# Tanstack Query

- Tantasck Query, react projelerinde asenkron state (api'dan gelen veri) yönetimini büyük ölçüde kolaylaştıran bir kütüphanedir.
- API isteklerini, cache'i, loading/error durumlarını ve otomatik yeniden istek atma sürecini bizim yerimize yönetir

## useQuery

- queryKey: sorgu anahtarı
- queryFn: sorgu fonksiyonu
- olmak üzere 2 parametre alır tanımlandığı bileşenin yüklenme anında (useEffect) otomatik olarak queryFn'de yazılan api isteğini atar ve api'dan gelen yanıtın bütün state'lerini tutar ve cache'de saklar

- useQuery api'dan aldığı cevabı cache'de tutar bu da demek oluyorki istersek 10 bileşenden useQuery ile aynı api endpointine istek atalım bu isteklerde sadece ilki api'a ulaşır ve api'dan gelen cevab cache'de saklanır ve diğer 9 istek api'a ulaşmadan cache'deki veriyi kullanır. Bu sayede api isteklerinin state'ini yönetirken redux vb. kütüphaneye ihtiyaç kalmaz.

- useQuery ile yapılan istek hata aldığında, doğrudan hata state'ini güncelelmek yerine olası anlık bir sunucu yoğunluğundan hata alabileceğimiz için 3 kez daha aynı endpointe istek atıp 3.denemede de hata alırsa hata state'ini günceller

## useMutation

- mutationFn: sorgu fonksiyonu
- olmak üzere 1 parametre alır ve bileşen yüklenince otomatik çalışmaz. useQuery'den farklı olarak sadece biz tetiklediğimiz zaman çalışır. Genelde form gönderme, butona tıklama, inputa yazma işlemlerinde api isteği atılacaksa kullanırız.
- `useMutation` bize `mutate` fonksiyonu verir. Bu fonksiyon çağrıldığunda `mutationFn` içerisine yazılan api isteği atılıt
- `useMutation` genelde `POST`, `PUT`, `PATCH`, `DELETE` isteklerinde kullanırız
- `onSuccess` ve `onError` fonksiyonları ile api isteğinden gelen olumlu veya olumsuz cevapta then/catch de olduğu gibi fonksiyon çalıştırabiliriz
