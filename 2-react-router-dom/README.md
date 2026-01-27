# React Router Dom

- React projelerinde sayfalama yapmamıza olanak sağlayan kütüphanedir

- **Browser Router**
- Bu yapı tüm uygulamayı sarar
- Görevi: url değiştiğinde react'a hangi bileşeni göstermesi gerektiğini söylemek

- **Routes**
- Bürün route'ların tanımlarının yapıldığı kapsayıcıdır

- **Route**
- Her route, yol + bileşen tanımlar
- Bu, url `/ürünler` olursa ekrana <Urunler/> bileşenini bas anlamına gelir

- **Link**
- Proje içerisinde yönlendirme yapmak için kullanılır

- **NavLink**
- Proje içerisinde yönlendirme yapmak için kullanılır
- Link'ten farkı açık olan sayfanın linkine `active` class'ı verir

- **useNavigate**
- Link elementinin fonksiyon versiyonudur.
- Çağrıldığı zaman geriye yönlendirme amacıyla kullanbilceğimiz bir fonksiyon döndürür (navigate)

- **Dynamic Routes**
- Sayfa içeriğini url'deki parametreye göre dinamik olarak değiştiği detay sayfalarıdır.
- Bu route'ları tanımlarken urldeki parameterleri `:paramtre_ismi` şeklinde tanımlarız
- Component içerisinden url'deki parametrelere erişmek için `useParams` hookunu kullanırız
- Bu sayede youte'un video detay sayfası, amazon'un ürün sayfası gibi içeriği dinamik olarak değişen sayfaları tanımlayabiliriz

- **404 Sayfası**
- Kullanıcı, tanımlamadığımız route'lardan birine gitmeye çalışırsa ona 404 sayfası göstermek isteriz.
- 404 sayfası tanımlamak için route'ların altına path değeri olarak `*`'a sahip olan yeni bir route oluştururuz.

- **useLocation**
- url ile alakalı detaylara erişmemizi sağlayan hook.

- **Nested Routes**
- Bir kapsayıcı route içerisinde başka route/route'lar oluşturulmasına `Nested (İç İçe)` denir
- Bu özellik sayesinde sadece belirli sayfalara özel ortak element / özellik tanımlanabilir.
