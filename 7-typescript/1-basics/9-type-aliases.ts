/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'deki varolan tiplerin yanısıra birkaç ts'e özel tip kullandık
 * Kapsamlı projelerde o an yaptığımız işe özel spesifik tiplere ihtiyaç duyarız
 * Bunları tanımlamak için type anahtar kelimesini kullanarak kendi tiplerimizi oluşturabiliriz
  
 * Neden ihtiyaç duyarız?
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde defalarca kullanabiliyoruz her seferinde baştab yazmak yerine kendi tipimizi oluşturup ismiyle çağırmak kod kalabalığını azaltır 
*/

// Örnek - 1
// Kendi özel isimlendiridğimiz string tipini oluşturalım
type metinTipi = string;

// Kendi oluşturduğumuz tipi kullanalım
let kullaniciAdi: metinTipi = "furkan";

// Örnek - 2
// Uçuş projesinde sıkça kullanduğımız [enlem,boylam] dizisi vardır...

// type alises kullanmadan
const x: [number, number] = [37.6789, 73.5321];
const y: [number, number] = [32.4589, 12.2321];
const z: [number, number] = [12.1189, 11.212];
const flightRoute1: [number, number][] = [x, y, z];

// type alises kullanarak
type Coord = [number, number];

const a: Coord = [37.6789, 73.5321];
const b: Coord = [32.4589, 12.2321];
const c: Coord = [12.1189, 11.212];
const flightRoute2: Coord[] = [a, b, c];

// Örnek - 3
// Aynı nesne tipini birden fazla kullanmamız gerekn bir seneryo

// type aliases olmadan
const user1: { id: number; name: string; age: number } = {
  id: 1,
  name: "ali",
  age: 34,
};

const user2: { id: number; name: string; age: number } = {
  id: 2,
  name: "ayşe",
  age: 24,
};

// type aliases
type User = { id: number; name: string; age: number };

let user3: User = { id: 3, name: "ahmet", age: 20 };
let user4: User = { id: 4, name: "fatma", age: 45 };

// Örnek-4
// E-Ticaret sitesi için örnek
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  size: "xs" | "sm" | "m" | "lg" | "xl";
  inStock: boolean;
};

let product: Product = {
  id: 23,
  name: "Kırmızı Elbise",
  price: 2540.99,
  category: "Elbise",
  size: "m",
  inStock: true,
};

let products: Product[] = [product, product, product, product, product, product];
