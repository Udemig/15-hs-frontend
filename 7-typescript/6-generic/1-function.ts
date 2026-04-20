/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın, interface'in içerisindeki bazı tipleri dinamik olarka aldığı parametreye göre değişmesini sağlamaya yarar.
 * Generic özelliğini kullanarak fonksiyonu veya tipi kullanıcağımız zaman parametre olarak tip gönderebiliyoruz
 * Bu, generic kullandığımız yapının yeniden kullanılabilirliğini arttırır.
*/

/*
 ? Yazmak istediğim fonksiyon
 * 1) parametre olarak number dizisi gelirse rastgele bir sayı döndürmeli
 * 2) parametre olarak string dizisi gelirse rastgele bir string döndürmeli
*/

// union type kullanmaya çalıştığımızda return tipini şartlı yazmadığımız için tip tanımlamasında başarısız oluruz
const getRandomElement = (array: number[] | string[]): string | number => {
  return "metin";
};

getRandomElement([1, 2, 3, 4, 5, 6]);

// doğru tip tanımı için aynı fonksiyonu 2 kere tekrar yazmamız gerekir
const getRandomString = (array: string[]): string => {
  return "abc";
};

const getRandomNumber = (array: number[]): number => {
  return 345;
};

// generic yardımıyla fonksiyonu tekrar yazalım
// dinamik olmasını istediğimiz tipleri generic parametre olarak alalım
const getRandom = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

// fonksiyonu kullanırken hem generic olarak tip hem de değer parametresi göndeririz
getRandom<string>(["a", "b", "c"]);

getRandom<number>([1, 2, 3, 4, 5]);

// react projelerinde nerelerde kullanılır
// axios.get<UserType>("/users")
// useState<number>(56)
// useRef<ElementTipi>(input)
