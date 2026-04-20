/*
 ! Interface Extends
 * Interface'ler extends ile type'larda oldığu gibi farklı bir/birlaç interface'i miras alabilir
 * Miras alma extends anahtar kelimesi ile yapılır
 * Class'lardan farklı olarak birden fazla elemani aynı anda miras almak mümkün
*/

interface IEsya {
  isim: string;
  fiyat: number;
  marka: string;
}

interface IMobilya extends IEsya {
  renk: string;
  boyut: string;
}

const masa: IMobilya = {
  isim: "Bilgisayar Masası",
  fiyat: 2450,
  marka: "IKEA",
  renk: "Ceviz",
  boyut: "120x60",
};

interface IEsya {
  isim: string;
  fiyat: number;
  marka: string;
}

// farklı bir interface oluşturlaım
interface IElektronik {
  garanti: number;
  sarj: boolean;
  bataryaOmru: number;
}

// birden fazla interface'i miras alalım
interface IBilgisayar extends IEsya, IElektronik {
  islemci: string;
  ram: number;
}

const laptop: IBilgisayar = {
  isim: "Monster Abra A5",
  fiyat: 39000,
  marka: "Monster",
  garanti: 24,
  sarj: true,
  bataryaOmru: 8,
  islemci: "Intel Core i7",
  ram: 16,
};

/*
 ! Challange
 * İlk olarak 2 farklı interface oluşturun 
 * Ardından 3. bir interface oluşturun ve ilk 2 interface'i miras alın
 * Son olarak en son oluşturduğunuz interface'i bir nesne tipi tanımında kullanın
  
 * Ysarklı: Kisi, Bilgisayar, Araba 
*/

interface IElektronik1 {
  garanti: number;
  suyaDayanikli: boolean;
}

interface IGiyilebilir {
  materyal: string;
  agirlik: number;
}

interface IAkilliSaat extends IElektronik1, IGiyilebilir {
  renk: string;
  marka: string;
}

const akilliSaat: IAkilliSaat = {
  garanti: 2,
  suyaDayanikli: true,
  materyal: "celik",
  agirlik: 30,
  renk: "lila",
  marka: "Samsung",
};
