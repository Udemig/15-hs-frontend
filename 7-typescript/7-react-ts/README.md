# Typescript ile React Yazımı

## Config Dosyaları

- Typescript ile alakalı ayarları yapmamızı sağlayan 3 adet tsconfig.json dosyası var

## Dosya Uzantısı

- `jsx` yerine `tsx` kullanırız
- `js` yerine `ts` kullanırız

## Kütüphaneler

- Bazı kütüphanelerde kütüphanelerin kendisinin yanı sıra ts kodlarınında gelişririce bağımlılığı olarak indirilmeli
- - axios
- - @types/axios

## Önemli

- Tipi tanımlanabilen her değişkenin / fonksiyonun / parametrenin / component'ın mutlaka tipi tanımlanmalı
- Otomatil tip algılama özelliğini mümkünse hiç kullanmamalıyız

## Hooks

- React hooklarını kullanırken bir veri tutuyorsak mutlaka tutulan verinin tipi tanımlanmalı (useState, useReducer, useContext, useRef, useSelector)

## Element Tipi

- Her jsx elementinin kendine has bir tipi vardır.
- Element tiplerini tanımlarken hep ynı syntaxı kullanırız
- `HTML[Etiket Rolü | Etiket İsmi]Element`

- button: `HTMLButtonElement`
- input: `HTMLInputElement`
- form: `HTMLFormElement`
- h1,h2,h3: `HTMLHeadingElement`
- div: `HTMLDivElement`

## Component Tipi

- React'ta en sık kullandığımız yapılar olan component'lar birer fonksiyondan meyadan gelir
- Fonksiyon tipi tanımlarken iki şeyin tipini mutlaka tanımlarız:
- - parametre: component'ın aldığı prop tipi tanımlanır.
- - return: componen'ın her zaman return ettiği veri jsx elementi olduğundan bunun tipi tanımlanır

## Event Tipi

- onClick / onChange / onSubmit gibi olaylarda çalıştırdığımız fonksiyonlara olay verisi içeren event parametresi gelir.
- event parametresinin değerlerine erişmek için tipinin tanımlanması gerekir.

- her olayıın kendine özel tipi vardır
- - onClick: `MouseEvent`
- - onChange: `ChangeEvent`
- - onSubmit: `SubmitEvent`

- event tipleri olayın hangi elementte gerçekleştiğini generic olarak alır
- - `MouseEvent<HTMLButtonElement>`
- - `ChangeEvent<HTMLInputElement>`
- - `SubmitEvent<HTMLFormElement>`

## Tiplerde Import Export

- Değişkenlerde olduğu gibi tipleride farklı bir dosyada kullanmak istediğimizde export edebiliyoruz
- Değişkenlerden tek farkı import ederken önüne `type` ifadesi eklenmeli

- `export interface FormType {id: string}`
- `import type { FormType } from "./components/form"`
