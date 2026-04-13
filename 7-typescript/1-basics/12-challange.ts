/*
 ! Challange
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean
 * array / object / tuple
 * string-literal / union-type
 * any
 * tiplerine sahip bir nesne tipi tanımlayın ve oluşturduğunuz tipi bir değişken üzerinde kullanın
  
 * tip herhangi bir nesne hakkında olabilir: araba, bilgisayar, film, kitap, takim.... 
*/

type User = {
  name: string;
  age: number;
};

const kullanici: User = {
  name: "Ali",
  age: 82,
};
