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

## İç İçe Kullanım

- `Aynı türden` iki component'ı iç içe kullanmakta bir problem yoktur

- Bir `server component` içerisinde `client component` kullanmakta bir problem yoktur

- Bir `client component` içerisinde `server component`'ı import ederek kullanrsak server component özelliklerini kaybeder ve client component'a dönüşür

- Bir `client component` içerisinde `server component`'ı HOC yöntemiyle children propu sayesinde kulanırsanız server component özelliklerini kaybetmez

# Data Fetching

- Next.js api'dan alınan veriyi cache'de tutar ve aynı api isteği tekrar atılırsa api'a tekrar istek atmak yerine cache'de tutulan veriyi kullanır

- Bu sayede:
- - ilk isteği atılan bütün isteklerde cevap beklemeye gerek kalmaz
- - api'a gereksiz istek gitmez
- - asenkron state'ler için context / redux / tanstack gibi yöntemlere gerek kalmaz

- Next.js varsayılan olarak bütün api isteklerini cache'ler ama bazen biz cachelemesini önlemek isteyebiliriz. Bu durumda fetch methodunun ayarlarını buna göre yaparız

# Next.js Methods

## useRouter

- sadece `client` component'larda kullanılabilir
- proje içerisinde yönlendirme yapmak için kullanılır
- back() | forward() | replace() | push() | refresh()

## redirect

- sadece `server` component'larda kullanılabilir
- proje içerisinde yönlendirme yapmak için kullanılır
- genelde yetkilendirme işlemlerinde kullanırız

## notFound

- hem `client` hem de `server` componentlarda kullanılabilir
- ekrana 404 sayfasını basar

## usePathname

- sadece `client` component'larda kullanılabilir
- url'den kullanıcının bulunduğu adresi getirir

## useParams

- sadece `client` component'larda kullanılabilir
- url'deki parametrelere erişmemizi sağlar
- server component'larda parametrelere prop yöntemiyle erişiriz

## useSearchParams

- sadece `client` component'larda kullanılabilir
- url'deki query parametrelere erişmemizi sağlar
- server component'larda query parametrelere prop yöntemiyle erişiriz

# Form

- Normal şartlarda formlarda bolca kullanıcı etkileşimi izlememiz gerektiğinden formları client component yaparız

- Server action yöntemini kullanarak form içerisindeki veriye erişme ve form gönderilince fonksiyon çalıştırma işlemini server componentlarda yapabiliriz

# Static Site Generation (SSG)

- SGG, next.js'in build (derleme) sırasında sayfaları önceden html olarak üretip sunucuda saklamasıdır

- Kullanıcı siteyi ziyaret ettiğinde sayfalar anında ve çok hızlı bir şekilde sunulur çünkü önceden hazırlanmıştır

### Static Sayfa

- Build anında html'i hazırlanıp sunucuda saklanır, kullanıcı sayfaya girdiğin tekrar hazırlanmadan direkt kullanıcıya sunulur
- Varsayılan olarak url parametresi olmayan bütün sayfalar statik sayfa olur

### Dinamik Sayfa

- Kullanıcı sayfaya girdiği anda html'i hazırlanıp sunulan sayfalardır
- Varsayılan olarak url parametresi olan sayfalar dinamik sayfa olur
