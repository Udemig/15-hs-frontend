/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılacağı yere özel bir tipte algılanması için type casting kullanılır
 * "as" operatörü ile kullanıldığı kod satırına özel değişkenin tipini belirleyebiliyoruz
*/

// Örnek - 1
type Product = {
  name: string;
  price: string | number;
};

let prouct: Product = {
  name: "Laptop",
  price: 50000,
};

/*
 * Normalde price string veya number tipinde olduğundan number'lara özel toFixed() methodunu kullanamayız
 * product değişkeninde fiyatın sayı olduğunu bildiğimizden dolayı toFixed()'ı normalde kullanmamızın önünce bir engel yok ama ts izin vermiyordu
 * bu hatanın önüne geçemek için toFixed() methodunu çağırmadan önce as kullanarak bu satıra özel ts tarafından number olarak algılanmasını sağladık
 */

(prouct.price as number).toFixed(2);

// örnek
let kisi: unknown = {
  name: "John",
  age: 30,
  address: "123 main st",
};

// kişi nesnesinin tipi unknown olduğu için name özelliğine erişemiyoruz
// kisi.name; //! HATA

// nesne için bir tip oluştururuz
interface IPerson {
  name: string;
  age: number;
  address: string;
}

// kişi nesnesinin özelliklerine erişirken hata vermemesi için tür dönüşümü yapalu
(kisi as IPerson).name;
