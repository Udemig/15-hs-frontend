# Next.js Routing

- Bir next.js projesinde routing (sayfalama) için 2 farklı yöntem vardır
- - App Router (Önerilen Yöntem): v13^ ile birlikte gelen yöntemdir
- - Pages Router: v13 öncesi sürümünde kullanılan yöntemdir

# App Router

- Dosya dizinine göre klasör tabanlı sayfalama yapar
- Bütün sayfalar `/src/app` klasörü içerisinde olmalıdır
- `/src/app` klasörü içerisinde tanımlanan ve içerisinde `page.jsx` dosyası olan bütün klasörler sayfa olarak algılanır
- `page.jsx` içerisinde bileşen tanımlanıp export edilir
- `page.jsx` dosyasını kapsayan klasörün adında yeni bir route oluşur
- next.jsx `page.jsx` olarak tanımlanan sayfaları tespit edip otomatik olarak kendi route'ına ekler

# Nested Routes - İç İçe Yollar

- örn:
- /profile > profilini görüntüle
- /profile/friend > arkadaşlarını görüntüle
- /prodile/edit > profilini düzenle

# Dynamic Routes - Dinamik Yollar

- Url'deki parametreye göre sayfa içeriğinin değiştiği sayfalar
- örn: `/product/10` `/videos/dsfnm8u3` `/cars/tesla`
- Bir route parametresi tanımlamak için react-router-dom'da, `/:parametre_ismi`
- Next.js route parametresi tanımlamak için `[parametre_ismi]` isminde klasör tanımlarız
- Component içerisinde url'deki paramtrelere erişmek için component'a otomatik olarak gelen params propunu kullanırız

# Link

- Next.js'in kendi Link component'ı vardır
- a etiketi yerine kullanılır
- `href` propu ile yönlendireceğimiz adresi söyleriz

# Catch All Segments - Birden fazla parametre

- /docs/belge-1
- /docs/belge-1/sayfa-10
- /docs/belge-1/sayfa-10/satir-20
- `/docs/[...slug]`

# Route Group

- Çok fazlda route olduğu seneryoda route'ları keategorize edip erişimini kolaylaştırmak için route'ları gruplandırmak isteyebiliriz

- Route'ları normal bir klassör içerisinde koyarsak klasör ismi url'i etkiler ama klasör ismini `()` içerisine koyarsak url'e herhangi bir etkisi olmaz

# Layout

- Bir uygulamanın veya sayfa grubunun genel dizaynını / ortak elementlerini / yetkilendirme durumunu belirlemek için kullandığımız bileşenlerdir

- Bir sayfa grubunu veya projedeki bütün sayfaları kapsayabiliriz

- Layout dosyasını oluşturduğumuz konuma bağlı olarak etkiledği sayfalar değişir
- - Eğer app kalsörü içerisinde oluşturursak bütün sayfalara etki eder
- - Eğer route grubu içerisinde oluşturursak ssadece o route grubundaki sayfalara etki eder

# Template

- Layout ile aynı özelliklere sahiptir, tek farı sayfa geçişlerinde state yenilenir

# Özel Dosyalar

- `page.jsx` > sayfa tanımlamak için kullanılır
- `layout.jsx` > sayfa gruplarının ortak özelliklerini tanımlamak için kullanılır
- `template.jsx` > sayfa gruplarının ortak özelliklerini tanımlamak için kullanılır
- `not-found.jsx` > 404 sayfasını tanımlamak için kullanılır

- `loading.jsx`
- - bir bileşen asenkron işlemi bekledği süre boyunca otomatik olarak ekran gelir
- - loading dosyası oluşturduğumuz klasöre bağlı olarak sayfalara etki eder

- `error.jsx`
- - bir bileşen hata fırlattığı zaman otomatik olarak ekran gelir
- - error dosyası oluşturduğumuz klasöre bağlı olarak sayfalara etki eder
- - hata bilgilerini ve component'ı yeniden renderlamaya yarayan fonksiyonu prop olarak alır
- - mutlaka sayfanın üst kısmında `use-client` ifadesi kullanılmalı

# Metadata

- Klasik react projelerinde bütün sayfalara index.html üzerinden ortak metadata tanımı yapıyorduk ama her sayfaya ayı metadata tanımlamak mümkün değildi, bu durumda seo anlamında - yazıyordu

- Next.js'de react'dan farklı olarak her sayfaya ayrı ayrı bir metadata tanımlama şansımız var bundan dolayı SEO anlamında klasör bir react projesine göre daha iyi seo puanı ederiz

- Bir sayfanın metadatasını tanımlamak istiyorsak o sayfada bir `metadata` isminde bir nesne tanımlayıp export etmeliyiz
