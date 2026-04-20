/*
 ! Generic Extends
 * Tipi generic olarak tanımladığımızda her türlü tipte değer atanmasına izin vermiş oluyoruz
 * Extends kullanarak generic olan tipin alabileceği değerleri kısıtlayabiliyoruz
 */

type Container<T extends string | number> = {
  foo: T;
  bar: T;
};

const x: Container<string> = {
  foo: "abc",
  bar: "fgh",
};
const y: Container<number> = {
  foo: 324,
  bar: 123,
};

/*
 ! Challange
 * En az 1 generic tip alan bir type / interface / fonksiyon / class yazınız
 * Tanımladığınız yapıyı en az 1 kez kullanın
 * Daha önce tanımladığımız tiplerden farklı olsun
 * Bonus: extends kullanın
*/

type Book<T extends string | number> = {
  name: T;
  page: T;
  author: T;
};

const kitap: Book<string> = {
  name: "Fire and Sword",
  page: "380",
  author: "Henryk Sienkiewicz ",
};
