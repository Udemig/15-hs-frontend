/*
 ! Interface
 * Bir nesnenin tipini tanımlamaya yarar.

 * Type Aliases | Abstract Class | Interface

 ? Innterface vs Abstract Class
 * class'lar aynı anda max bir class'ı miras alabilir
 * ınterface'ler ise birden fazla interface'i miras alabilir
  
 ? Interface vs Type Aliases
 * **Nesne tipi tanımlama açısından** aralarında en ufak bir fark bile yoktur. 
 * Type aliases yönteminde sadece nesne değil array, tuple, fonksiyon tipleride tanımlanabilir
 * Interface'lerde sadece nesne tipi tanımlanabilir
*/

// type aliases
type UserType = {
  name: string;
  age: number;
  married: boolean;
};

// interface
interface IUser {
  name: string;
  age: number;
  married: boolean;
}

const kisi: UserType = {
  name: "Mehmet",
  age: 34,
  married: true,
};

// Type alises ile nesne dışırasında tip tanımıda yapabilirsiniz
type NesneTipi = { id: number };

type DiziTİpi = string[];

type FonksiyonTipi = (a: string) => void;

type LiteralTipi = "a" | "b" | "c";

// Interface ile sade nesne tipi tanımlarız
interface INesne {
  id: number;
}

/*
 Sonuç olarak:
 Intrerface'ler sadece nesne tipi tanımlamak için varolduklarından dolayı bizde projelerimizde nesne tipi tanımlarken interface kullanırız. Ama nesne dışındaki bütünm tipleride type aliases yöntemi ile tanımlayacağız
*/
