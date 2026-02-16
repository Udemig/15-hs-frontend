# Temel Kavramlar

## State

- Component'ın verisini tutmak için kullanılır
- Her değiştiğinde component yeniden render olur

## Prop

- Veriyi bir bileşenden diğerine aktarma yöntemidir. (Üst > Alt)

## Prop Drilling

- İç içe bir çok bileşen olduğu durumunda en üstteki bileşenden alt bileşene propu gönderdiğimiz seneryo
- Yani prop aktarma işlemi ard arda birkaç kez gerçekleşir

## Context

- Component'lardan bağımsız noktalarda state depolamamızı sağlar.
- Context'de tutulan state bütün component'lar tarafından abonelik yöntemiyle erişilebilir
- Prop drilling'i önler

## Context Neden En İyi Çözüm Değil?

- Context yapısı çok iyi bir state yönetim seçeneği olsada büyük çaptaki projelerde çok fazla kod tekrarı olduğundan hem okunabilirlik hem performans anlamında reduxa göre geride kalır

## Redux Artıları

- Kod tekrarını önler
- Daha performanslı
- Bileşenlerdeki karışıklığı engeller
- Hata ayıklamada daha gelişmiştir

### Redux Anatomisi

1.  Store: Uygulamadaki tüm reducer'ları bir arada tutuark veriye tek bir merkezden ulaşmamızı sağlar

2.  Reducer: Dispatch edilen action'a göre state'in nasıl değişeceğine karar veren fonksiyon

3.  Dispatch: Action'u reducer'a ileten fonksiyon

4.  Action: State'in nasıl değişceğini ifade eden nesnelerdir

- - type: action'un görevini tanımlayan string
- - payload: reducer'ın işlemi gerçekleştirebilmesi için gönderdiğimiz veri

5. Subscribe: Component içerisinden store'daki verilere erişmemizi sağlar

6. Provider: Store'da tutulan state'lerin component'lara aktarılmasını sağlayan HOC.

# Kurulum

1. Paket indirme
   `npm i redux react-redux`

2. Reducer'ları oluştur
   Projede kullancığımız verileri yöneticek reducer fonksiyonları oluştur

3. Store'u oluştur
   Reducer'ları birleştirip store'u oluştur
