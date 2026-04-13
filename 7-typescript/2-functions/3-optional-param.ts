/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz
  
 * Tanım: (a:string,b?:string) => bu seneryoda a zorunlu b ise opsiyonel olur
 !! Opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez
*/

function exaFunction(par1: number, par2?: string, par3?: boolean) {}

exaFunction(123, "selam", true);
exaFunction(123, "selam");
exaFunction(123);
exaFunction(123, undefined, true);

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `${zaman}, ${isim}`;
  }

  return `Merhaba, ${isim}`;
};

console.log(karsilama("Ahmet"));
console.log(karsilama("Ahmet", "Günaydın"));

// Opsiyonel değerleri nesne tipi tanımındada kullanabiliyoruz
type User = {
  name: string;
  age: number;
  childCount?: number;
};

let user1: User = {
  name: "Ahmet",
  age: 34,
  childCount: 5,
};

let user2: User = {
  name: "Mehmet",
  age: 23,
};
