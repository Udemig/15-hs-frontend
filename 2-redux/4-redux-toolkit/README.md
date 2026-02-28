# Redux Toolkit

- Redux'ın karmaşık ve tekrarlı yapsısını sadeleştirir, geliştirme deneyimini iyileştirir.
- Daha az kod daha çok iş.

- **Neden Ortaya Çıktı**
- Klasik redux kullanırken karşılaştığımız durumlar:
- Çok fazla boilerplate kod
- Action Type sabitleri
- Action Creator dosyaları
- Switch-case reducer yapıları
- State'i immutable olduğu için doğrudan değiştirememe

- Redux toolkit yukarudaki seneryoların hepsini iyileştirir

- **Kurulum**
- npm i @reduxjs/toolkit react-redux
- store'u ve slice'ı oluştur

- **Klasik Redux'ta Oluşturulması Gereken Yapılar**
- store | reducer | action-types | action-creator

- **Toolkit de Oluşturduğumuz Yapılar**
- store | slice

- **Slice**
- Klasik redux'ta aksiyonları, aksiyon tiplerini, reducer'ları ayrı ayrı tanımlıyorduk.
- Redux toolkit içeriisnde yer alan slice yapısı sayesinde tek bir noktada hepsini tanımlayabiliyoruz
