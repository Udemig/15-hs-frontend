// Normal bir nesnenin tipini tanımlayalım
type Yetki = {
  rol: string;
  yazmaYetkisi: boolean;
  kullaniciBanladı: number;
};

const admin: Yetki = {
  rol: "admin",
  yazmaYetkisi: true,
  kullaniciBanladı: 230,
};

// Ama bazen nesnenin hangi keylere sahip olduğunu bilemiyoruz bu durumda Recodr kullanırız:
const puanTablosu: Record<string, number> = {
  ahmet: 93,
  ali: 23,
  ayse: 78,
  murat: 12,
  fatma: 89,
};

// Örnek - 2
// Aşağıdaki nesnenin tipini tanımlayalım
const codes = {
  200: "Başarılı",
  423: "Yetersiz yetki",
  404: "Bulunamadı",
  500: "Sunucu hatası",
};

// a) interface kullanarak yukarıdaki nesnenin tipini tanımlayalım
interface ICode {
  200: string;
  423: string;
  404: string;
  500: string;
}

// b) record kullanarak yukarıdaki nesnenin tipini tanımlayalım
type CodeType = Record<number, string>;
