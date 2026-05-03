# Kütüphaneler

- motion
- react-paginate
- react-router-dom
- rc-pagination
- axios
- tailwindcss
- typescript
- react

# Kaynaklar

- API: https://public.opendatasoft.com/explore/dataset/all-vehicles-model/information/?sort=year

# Proje Yayınlama Adımları

1. Projenizi Hazırlayın (Build alınabilmeli)
2. Projeyi Github'a Yükle
3. Hosting Platformu Seç ve Deploy Et (127.897.564.34)
4. Domain (Alan Adı) kirala ve DNS ayarlarını yap (www.carhub.com)
5. SEO İyileştirmesi

# Build (Derleme)

- Projeyi dağıtıma hazır hale getirme işlemidir
- `npm run build` ile optimize eidlmiş JS ve CSS dosylarını oluştururuz

# Hosting (Barındırma)

- Frontend projesinin derlenmiş dosyalarının internet üzerinden erişilebilir hale gelmesi için bir sunucuta yüklenmesi gerekir

## Hosting Seçenekler

1. Modern Çözümler

- Projeyi github reposu üzerinden tek tıkla yayınlayabiliyoruz
- Otomatik SSL sertifikası
- Otomatik CDN
- Otomatik CI/CD (Sürekli Geliştirme ve Sürekli Dağıtım)

- Vercel
- Netlify
- AWS
- Azure
- Google Cloud
- Firebase
- Github Pages

2. Klasik Çözümler

- Kendi sunucumuzu kiralayıp, her şeyi linux komutları ile kendimiz yönetiriz.
- VPS (Virtual Private Server)

- IBM
- Digital Ocean
- Contabo

# Deploy (Yayınlama)

- Projenin geliştirme ortamından sunucuya aktarma işlemidir
- Dist klasörünün sunucuya yüklenmesi

# Domain (Alan Adı)

- www.carhub.com
- sunucular normalde IP adresi üzerinden erişelebilir ama ip adresleri akılda kalıcı olmaığından biz alan adlarını tercih ederiz.

- Godaddy
- Namecheap
- İsimtescil

# DNS Kayıtları

- DNS Kayıtları, alan adının internette neye karşılık geldiğini söyleyen kayıtlardır.

- **A Kaydı**: Domaine girildiğinde hangi ip adresine yönlendirileceğini söylememizi sağlar
- **CName Kaydı**: Domaine girildiğinde hangi alan adına yönlendirileceğini söylememizi sağlar
- **NS Kaydı**: Domain'in hangi DNS sunucularını kullandığını belirltir

# Index

- Indexlenmek, bir web sayfasının arama motorları tarafından bulunup arama motorunun veritabanına kaydedilmesi demektir.
- Indexleme gerçekleştikten sonra kullanıcılar arama sonuçlarında sitenizi göremeye başlayabilir.
- Yeni yayınlanan vir sitenin indexlenmesi 3-7 güne kadar sürebilir

# SEO

- SEO (Search Engine Optimization), Türkçesiyle Arama Motoru Optimizasyonu, web sitenin Google gibi arama motorlarında daha üst sıralarda çıkması için yapılan tüm teknik ve içerik çalışmalarının genel adıdır.
- SEO iyileştirmesi için yapılabilecekleri temelde 3'e ayırabiliriz:

1. Teknik SEO

- Sitenin altyapısı ile ilgili güncellemeler
- - site hızı
- - mobil uyumluluk
- - yapısı (`/blog/123` yerine `/blog/seo-nedir?` kullanılmalı)
- - SSL (`https`)
- - 404 sayfası

2. İçerik SEO

- Sayfanın içeriğiyle alakalıdır
- - Başlıklar (H1,H2,H3)
- - Anahtar kelime kullanımı
- - Meta etiketleri
- - Görsellerdeki alt etiketleri
- - Input'ların label'lara bağlı olması
- - Butonların name değerlerinin olması
- - Semantik etiket kullanımı
- - Site içi linkler

3. Off Page SEO

- Başka sitelerin sana verdiği değer:
- - Backlink (başka sitelerden link almak)
- - Sosyal medya paylaşımları
- - Marka bilinirliği
