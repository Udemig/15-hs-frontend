# Tasarım Sistemi: Editoryal Dondurma Deneyimi

Bu tasarım sistemi, geleneksel bir e-ticaret arayüzünden ziyade, butik bir dondurma dökümantasyonu ve tadım yolculuğu hissi uyandırmak için tasarlanmıştır. Standart kutu-kenarlık yaklaşımlarını reddeder; bunun yerine ton sür ton katmanlama, asimetrik yerleşimler ve iştah açıcı bir derinlik kullanarak "modern ve canlı" bir kullanıcı deneyimi sunar.

## 1. Yaratıcı Kuzey Yıldızı: "The Artisanal Scoop" (Zanaatkar Dokunuş)

Tasarım sisteminin temel felsefesi, dondurmanın dokusunu dijital ortama taşımaktır. Bu sistem, **"Organic Softness"** (Organik Yumuşaklık) ilkesini benimser. Sert çizgiler yerine kavisli formlar, keskin sınırlar yerine renk geçişleri ve tipografik hiyerarşi ile yönlendirilen bir akış kullanılır. Tasarım, bir menüden çok, modern bir yemek dergisinin dijital edisyonu gibi hissettirmelidir.

## 2. Renk Stratejisi ve "No-Line" Kuralı

Renk paleti, kremalı beyazlar (`surface`), taze nane (`secondary`) ve zengin çikolata (`tertiary`) tonlarını bir araya getirerek duyusal bir denge kurar.

### Renk Rolleri
- **Primary (`#9d4867`):** Meyveli ve canlı pembe tonu, ana aksiyonlarda ve marka vurgularında kullanılır.
- **Surface & Background (`#ffffd3`):** "Creamy White" temeli. Saf beyaz yerine bu sıcak krem tonu, kullanıcıya ev konforu ve doğallık hissi verir.
- **Secondary (`#426e47`):** "Mint Green" ferahlığı. Sağlıklı içerikleri ve tazeliği vurgulamak için idealdir.
- **Tertiary (`#7d5d53`):** "Chocolate Brown". Tipografide derinlik ve premium bir ağırlık oluşturmak için kullanılır.

### "No-Line" ve Katmanlama Kuralları
- **Kenarlık Yasağı:** Bölümleri ayırmak için asla 1px katı çizgi kullanmayın. Alan derinliği sadece `surface-container` hiyerarşisi ile sağlanmalıdır.
- **Nesting (Yuvalama):** Bir `surface` (arka plan) üzerine gelen kartlar `surface-container-low` (`#fcfbde`) olmalı, bu kartların içindeki etkileşimli alanlar ise `surface-container-highest` (`#eaecb8`) ile vurgulanmalıdır.
- **Glassmorphism:** Yüzen öğelerde (sepet özeti, dil seçici), `surface` rengini %80 opaklıkta kullanarak `backdrop-blur: 12px` efekti uygulayın. Bu, dondurmanın üzerindeki hafif buzlu dokuyu simüle eder.

## 3. Tipografi: Karakterli ve Okunabilir

Tipografi, markanın sesidir. Başlıklar oyunbaz ve enerjikken, gövde metinleri profesyonel bir sadelik sunar.

- **Display & Headlines (`plusJakartaSans`):** Geniş karakter yapısı ve modern kavisleri ile markanın neşeli yönünü temsil eder. `display-lg` (3.5rem) kullanarak asimetrik, büyük başlıklarla odak noktası oluşturun.
- **Body & Titles (`beVietnamPro`):** Okunabilirliği maksimize eden, temiz bir sans-serif. Ürün açıklamalarında ve içerik listelerinde `body-md` (0.875rem) kullanarak editoryal bir denge kurun.
- **Hiyerarşi Notu:** Başlıklarda `tertiary` (Chocolate Brown) kullanarak yüksek kontrast sağlayın, gövde metinlerinde `on-surface-variant` (`#65673e`) ile göz yormayan bir okuma deneyimi sunun.

## 4. Derinlik ve Elevasyon

Bu tasarım sisteminde derinlik, gölgelerden ziyade "Tonal Layering" (Tonlamalı Katmanlama) ile elde edilir.

- **Layering Principle:** Bir içerik bloğunu öne çıkarmak için `surface-container-lowest` kartını `surface-container-low` bir zemin üzerine yerleştirin. Bu, yumuşak ve doğal bir yükselti sağlar.
- **Ambient Shadows:** Eğer bir öğenin "yüzmesi" gerekiyorsa (örneğin ana aksiyon butonu), gölge rengi olarak siyah yerine `on-surface` renginin çok düşük opaklıklı bir versiyonunu kullanın. Örn: `box-shadow: 0 10px 30px rgba(56, 58, 21, 0.06)`.
- **Ghost Border:** Erişilebilirlik için sınır gerekiyorsa, `outline-variant` (`#bbbc8c`) rengini %15 opaklıkla kullanın. Asla tam opak sınır çizgisi kullanmayın.

## 5. Bileşenler (Components)

### Butonlar
- **Primary Button:** `primary` dolgu, `on-primary` metin. Köşeler `full` (stadyum tipi) veya `xl` (3rem). `primary` ile `primary-container` arasında çok hafif bir dikey gradyan kullanarak "dolgunluk" hissi verin.
- **Secondary Button:** `secondary-container` dolgu ve `on-secondary-container` metin.

### Kartlar ve Listeler
- **Artisanal Cards:** Kartlarda divider (ayraç) kullanmayın. Başlık ve içerik arasındaki ayrımı dikey boşluk (Spacing Scale) ile sağlayın. Ürün görselleri kartın kenarlarından taşan (overlap) şekilde yerleştirilerek dinamizm artırılmalıdır.
- **Input Fields:** `surface-container-highest` dolgu rengi kullanılmalı, odaklanıldığında (focus) `primary` renginde bir "Ghost Border" ile vurgulanmalıdır.

### Özel Bileşenler
- **Scoop Selector:** Dondurma toplarını seçmek için kullanılan dairesel, hafif `surface-tint` içeren interaktif çipler.
- **Flavor Tags:** `secondary-fixed` renginde, düşük kontrastlı ve yüksek yuvarlaklıklı mikro-etiketler.

## 6. Yapılması Gerekenler ve Pitfall'lar (Do's & Don'ts)

**Do (Yapın):**
- **Asimetriyi Kucaklayın:** Ürün görsellerini grid'in tam ortasına değil, hafifçe sağa veya sola kaydırarak yerleştirin.
- **Beyaz Boşluk (White Space):** Öğeler arasında nefes alacak geniş alanlar bırakın; dondurmanın ferahlığını yansıtın.
- **Yüksek Kaliteli Görsel:** Sadece profesyonel, makro çekim "food photography" kullanın.

**Don't (Kaçının):**
- **Keskin Köşeler:** Asla `none` veya `sm` yuvarlaklık derecelerini kullanmayın. Bu sistemin ruhu yumuşaklıktır.
- **Koyu Mod Çizgileri:** Koyu renkli ayraçlar veya ağır gölgeler kullanmaktan kaçının; bunlar tasarımı "ağırlaştırır" ve dondurma temasının hafifliğiyle çelişir.
- **Karmaşık İkonlar:** Çok detaylı ikonlar yerine, basit ve kavisli (rounded) çizgi ikonlarını tercih edin.

---
*Not: Bu tasarım sistemi, her dokunuşta bir kepçe dondurmanın verdiği mutluluğu ve kaliteyi hissettirmek için kurgulanmıştır.*