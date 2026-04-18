/*
 ! Readonly
 * Readonly anahtar kelimesi, class'ın veya nesnenin özelliklerinin sadece okunabilir olmasını sağlar
 * Readonly ile tanımladığımız özelliklerlere değer ataması ssadece aşağıdaki durumlarda yapılabilir.
 * - sınıflarda sadece consructor içerisinde değer atanabilir
 * - nesnelerde sadece nesne oluşturulurken değer atanabilir
*/

// ? Nesneler İçin Kullanım

// bir nesne tipi tanımladık
type Insan = {
  isim: string;
  soyad: string;
  readonly tcNo: string;
};

const kisi: Insan = {
  isim: "Ahmet",
  soyad: "Çimen",
  tcNo: "4302573485734",
};

kisi.isim = "Mehmet";
kisi.soyad = "Gündüz";
// kisi.tcNo = "34928923784" //! HATA

// ? Sınıflardaki Kullanım
class Kitap {
  public isim: string = "";
  public sayfa: number = 0;
  private readonly yazar: string = "";
}

/*
 ! Challange
 * Bir class tanımayın ve bu class'tan bir örnek oluşturun
 * Bu class en az 4 özelliğe sahip olsun
 * Bu özelliklerden en az biri readonly olsun
 * Erişim belirteçlerini kullanın (public, protected, private)
  
 * Yasaklılar: Kişi, İnsan, Ürün 
*/
