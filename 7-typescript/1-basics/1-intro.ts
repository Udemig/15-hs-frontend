/*
 ! Typescript
 * Typescript, javascript'İn tip tanımlanabilir bir üst versiyonu olarak microsoft tarafından geliştirilmiş bir programlama dilidir.

 * Neden Typescript ? 
 * * JS'de koddaki hataları runtime'da görürüz
 * * TS'de koddaki hatları kod editöründeyken daha projeyi çalıştırmadan görürüz
  
 * * JS'de tanımladığımız değişkene daha sonra farklı tipde değer ataması YAPILABİLİR 
 * * TS'de tanımladığımız değişkene daha sonra farklı tipde değer ataması YAPILAMAZ 
  
 * * JS'de çok kısıtlı bir otomatik tamamlama desteği bulunur
 * * TS'de çok daha geniş kapsamlı bir otomatik tamamalama desteği bulunur 
*/

let user = {
  name: "ali",
  age: 34,
};

console.log(user.name);

let x = "selam";

x = "merhaba";
