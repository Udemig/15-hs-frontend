/*
 * Aşağıdaki tipler typescript içerisinde varsayılan olarak bulunur:
 
 ! Partial
 * Generic oalrak aldığı nesnenin tüm özelliklerini opsiyonel yapar

 ! Required
 * Generic olarak aldığı nesnenin tüm özelliklerini zorunlu yapar

 ! Readonly
 * Parametre olarak aldığı nesnenin tüm özelliklerini sadece okunabilir yapar
*/

type User = {
  name: string;
  password: string;
  age: number;
};

type User2 = {
  name?: string;
  password?: string;
  age?: number;
};

const createUser = (data: Required<User2>) => {};

const updateUser = (data: Partial<User>) => {};

createUser({ name: "Faruk", password: "123dsfs", age: 34 });
updateUser({ age: 28 });

const ali: Readonly<User> = {
  name: "ali",
  age: 23,
  password: "deneme123",
};
