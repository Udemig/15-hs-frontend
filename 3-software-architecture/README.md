# Yazılım Mimarisi

- Bir yazılımın iskelet planıdır.
- Bir binanın mimari planı, nasıl odaları, kolonları, elektrik-su tesisatını belirliyorsa, yazılım mimarisi de yazılımın:

* Hangi parçalardan oluşacağını
* Bu parçaların nasıl iletişim kuracağını
* Hangi teknolojilerin kullanılacağını
* Performansın ve ölçeklenebilirliğin nasıl sağlanacağını
* Güvenliğin nasıl işleyeceğini
  belirleyen en üst seviye tasarımdır.

# Neden Gerekli?

- Daha hızlı geliştirme
- Daha kolay bakım
- Büyüdükçe çökmeyecek şekilde ölçeklendirme
- Performanslı ve güvenli tutmak için

# Yazılım Mimarisi Türleri

1. Monolit Mimari
2. Mikroservis Mimarisi
3. Katmanlı Mimari (Layered Architecture)
4. Olay Tabanlı Mimari (Event-Driven Architecture)

- Bunlar modern dünyada en çok kullanılan yapılardır.

## Monolit Mimari

- Tüm uygulama tek bir bütün olarak çalışır.
- Backend, frontend, veritabanı erişimi, iş mantığı... hepsi aynı kod tabanında bulunur ve tek bir uygulama olarak deploy edilir.
- Örn: Amazon'un tüm backend (kullanıcı, sipariş, ödeme, ürün yönetimi) ve frontend kodlarının tek bir projede yazılıp tek bir sunucuya deploy edilmesi.

## Microservices Mimari

- Uygulama birçok küçük, bağımsız servisten oluşur.
- Her servis kendi veritabanına ve kendi kod tabanına sahiptir; birbirleriyle genellikle HTTP/REST veya mesaj kuyrukları üzerinden iletişim kurar.
- Örn: Amazon'un farklı iş alanlarının ayrı backend servisleri olarak yazılması:
- UserService → Kullanıcı yönetimi (kendi DB'si)
- OrderService → Sipariş yönetimi (kendi DB'si)
- PaymentService → Ödeme işlemleri (kendi DB'si)
- InventoryService → Stok yönetimi (kendi DB'si)

> Not: Bir uygulamanın frontend'ini (kullanıcı paneli, admin paneli, satıcı paneli) ayrı projelere bölmek **Microservices değil, Micro-Frontend** mimarisidir. Microservices kavramı backend servisleri için kullanılır.

## Katmanlı Mimari (Layered Architecture)

- Kod katmanlara bölünür.
- UI (Sunum / Presentation)
- Business (İş Mantığı)
- Data (Veri Erişimi / DB)

- Katmanlı mimarinin bazı türleri: MVC, MVVM..

- - MVC (Model-View-Controller)
- - - Model: Veri yapısını, veriyi yöneten kodları ve iş mantığını (business logic) içerir.
- - - View: Kullanıcı arayüzü (UI) kodlarını içerir.
- - - Controller: View'dan gelen kullanıcı isteklerini alır, uygun Model'i çağırır ve sonucu uygun View'a yönlendirir. Yani Model ile View arasındaki koordinatördür; iş mantığı barındırmaz.

## Olay Tabanlı Mimari (Event-Driven Architecture)

- Sistem, olaylar (event) aracılığıyla birbirine haber gönderir.
- "Sipariş oluşturuldu", "kullanıcı kayıt oldu" gibi event'ler üretilir.

## Doğru mimari tercihinin faydaları?

1. Performans: İyi tasarlanmış bir mimari ile sistemin, kaynakları verimli kullanılması sağlanabilir.
2. Ölçeklenebilir.
3. Bakım ve Geliştirilebilirliği Kolaylaştırır.
4. Ekipler arası iş birliği ve verimlilik artar.
5. Maliyet düşer.
6. Yeniden kullanılabilirlik artar.
7. Esneklik sağlar.

## Ölçeklendirme (Scaling)

- Kısa ve Net Tanım:
- Ölçeklendirme, bir uygulamanın trafik, kullanıcı, veri veya işlem yükü arttığında performansını koruyarak çalışmaya devam etmesini sağlayacak şekilde yapılandırılmasıdır.

- Frontend dünyasında ölçeklendirme:
- Daha fazla kullanıcı => daha fazla istek => daha fazla veri => daha fazla state yönetimi ihtiyacı

## Tasarım Deseni (Design Patterns)

**Tasarım desenleri**, sık karşılaşılan yazılım problemleri için hazırlanmış **genel çözüm şablonlarıdır**. Kod değildir; **nasıl tasarlayacağını öğreten rehberler** gibidir.

3 ana gruba ayrılır:

---

## 🟩 1) Creational Patterns (Nesne oluşturma desenleri)

Nesne oluşturmayı **daha esnek ve kontrollü** hale getirir.

- **Singleton** → Tek bir nesne
- **Factory** → Nesne üretmeyi fabrikaya bırak
- **Builder** → Karmaşık nesneleri adım adım oluştur
- **Prototype** → Nesne kopyalama
- **Abstract Factory** → Uyumlu nesne setleri üret

---

## 🟧 2) Structural Patterns (Yapısal desenler)

Sınıfların ve nesnelerin **birbirine nasıl bağlanacağını** düzenler.

- **Adapter** → Uyumsuz yapıları uyumlu yap
- **Facade** → Karmaşık sistemi basitleştir
- **Decorator** → Nesneye dinamik özellik ekle
- **Proxy** → Araya bir kontrol katmanı koy
- **Composite** → Ağaç yapıları yönet
- **Bridge** → Soyutlama ve implementasyonu ayır
- **Flyweight** → Hafıza tasarrufu

---

## 🟦 3) Behavioral Patterns (Davranışsal desenler)

Nesnelerin **iletişim şekillerini** düzenler.

- **Strategy** → Değiştirilebilir algoritmalar
- **Observer** → Olay olduğunda haberdar et
- **Command** → İşlemleri komut nesnesine dönüştür
- **State** → Davranışı duruma göre değiştir
- **Mediator** → Nesneler merkez üzerinden konuşur
- **Chain of Responsibility** → İstek sırayla işlenir
- **Iterator, Template, Visitor, Memento** → çeşitli kontrol/iletişim yapıları

---

### 📌 En sade haliyle:

- **Creational** → Nasıl oluştururum?
- **Structural** → Nasıl bağlarım?
- **Behavioral** → Nasıl iletişim kurdururum?

# S.O.L.I.D Prensipleri

- S - Single Responsibility Principle (Tek Sorumluluk Prensibi)
- O - Open/Closed Principle (Açık/Kapalı Prensibi)
- L - Liskov Substitution Principle (Liskov Yerine Geçme Prensibi)
- I - Interface Segregation Principle (Arayüz Ayrımı Prensibi)
- D - Dependency Inversion Principle

# 12 Factor App İlkeleri

1. **Codebase** – _Tek kod tabanı, birçok deploy_
2. **Dependencies** – _Bağımlılıkları açıkça bildirme ve izole etme_
3. **Config** – _Konfigürasyonları ortam değişkenlerinde tutma_
4. **Backing Services** – _Dış servisleri ek kaynak (resource) olarak ele alma_
5. **Build, Release, Run** – _Build → Release → Run aşamalarını ayırma_
6. **Processes** – _Uygulamayı bir veya daha fazla stateless süreç olarak çalıştırma_
7. **Port Binding** – _Servisleri port üzerinden sunma (embedded server)_
8. **Concurrency** – _Süreci çoğaltarak ölçeklendirme (process model)_
9. **Disposability** – _Hızlı başlama ve düzgün kapanma (graceful shutdown)_
10. **Dev/Prod Parity** – _Geliştirme, test ve üretim ortamlarını olabildiğince benzer tutma_
11. **Logs** – _Logları olay akışı (event stream) olarak ele alma_
12. **Admin Processes** – _Yönetim/operasyon komutlarını tek seferlik işlemler olarak çalışma ortamında çalıştırma_
