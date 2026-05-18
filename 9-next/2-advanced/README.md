# Parallel Routes

- Birden fazla `page.jsx`'i parallel olarak aynı layout içerisinde ekrana basmak
- Bu yöntemi dinamik içeriğe sahip admin dashboard veya sosyla medya feedi gibi sayfalarda kullanırız

- Admin paneli üzerinde örnek vericek olursak:

- - Normal component kullanımında:
- - ```jsx
    <Revenue/>
    <Users/>
    <Notification/>
    ```

- - Parallel routes'ta ise:
- - ```jsx
    @revenue
    @users
    @notification
    ```

- - Bu yöntemde yukarıda yazılanlar normal component değil ayrı route segmentleridir.
- - Yani:
- - ayrı loading olabilir
- - ayrı veri çekebilir
- - bağımsız render edilir
- - route mantığıyla çalışır

# Intercepting Routes

- Kullanıcnı deneyimini arttırmak amacıyla modal tabanlı navigasyon sağlar

- Bu sayede farklı bir saya içeriğini kullanıcıyı bulunduğu sayfadan ayrılmadan modal arayüzden gösterebiliyoruz bu yöntemin klasik bir modal yapısında asıl farkı arayüz ekrana modal olarak gelsede kullanıcı o sayfayı ziyaret etmiş sayılır yani SEO anlamında çok daha iyi sonuç verir

# Images

- Normal img elementi yerine next.js Image component'ını kullanarak resimleri çok daha optimize bir şekilde ekrana basabiliriz
- - Optimizasyon
- - Webp Formatına çevirme
- - Lazy Loading

# Import

## Relative Import

- dosya konumuna bağlı olarak `../..` ifadesiyle import yolunu yazarız

## Absolute Import

- import yolunun başına `@` kullandığınızda yol olarak src'ye gidersiniz.
- Bu yöntemle yapılan importlar sayesinde dosya konumunu değiştirsek bile import yolunu değiştirmeye gerek kalmaz

# Font

- Next.js resimlerde olduğu gibi fontlar içinde optimizasyon yöntemlerine sahiptir

## Remote Font

- Next.js'de google fonts'dan alıcağımız fontları `next/fonts/google` adresinden import eder ve kurulumunu yaparız

## Local Font

- Projemize dahil ettiğimiz bir otf/ttf dosyasını `LocalFont()` fonksiyonu ile kurulumunu yapabiliriz

# Rendering Yöntemleri

## Client Side Rendering (CSR)

- Bu yöntemde, kullanıcı sayfaya girdiğinde `boş html dosyası` ve `javascript dosyası` indirir. İndirilen js kodlşarı `kullanıcının cihazında` çalışır, html dosyasının içi dolar ve kullanıcı sayfa içerğini görür

## Server Side Rendering (SSR)

- Bu yöntemde, kullanıcı sayfaya girdiğin js kodu `sunucuda` çalışır ve html içeriği sunucuda oluşur ve kullanıcı sadece `dolu html dosyası` indirir ve sayfa içeriğin görür

- Bu iki yöntemi karşılaştırdığımız SSR, hem SEO hem Performans açısından daha iyidir

# Component Çeşitleri

## Server Component

- Next.js de varsayılan component türüdür.
- Yeni bir component oluşturulduğunda direkt server component olarak oluşur
- Bu component'ın içeriği `SSR` ile render olur
- Hem SEO hem Performans açısından daha iyidir.
- Kullanıcı etkileşemilerini takip edemiyor ve hook'ları kullanamıyoruz.

## Client Component

- Bir component'ın en üst satırını `use client` directive ifadesini yazarsanız client component olur.
- Bu component'ın içeriği `CSR` ile render olur
- Kullanıcı etkileşimleri izlenebiliyor ve hook'ları kullanabiliyoruz

## Özetle

- Server component'lar daha iyi olduğu için projelerimizde olabilidiğince çok server component kullanmaya çalışıcaz sadece zorunda kaldığımız durumlarda (kullanıcı etkileşimini izleyeceksek veya hook kullanıcaksak) client component kullanırız

- Not: Next.js bizden olabildiğince çok server component kullanmamızı istediği için sayfa içerisinde kullanıcı etkileşimizi takip ediceğimiz bir yer varsa bütün sayfayı client componenta çevirmek yerine o kısmı ayrı bir client component haline getirip sayfanın geri kalanını server component olarak tutmak daha mantıklıdır.
