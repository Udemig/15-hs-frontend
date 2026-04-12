/*
 ! Type Annotation
 * JS'de ğişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat TS'de tanımladığımız değişkenlerin tiplerini belirleyebiliyoruz
 * Bu sayede deper ataması yaraken belirlenen tip kısıtlamasının dışarısında çıkamıyoruz
 * Bu kısıtlama kodda oluşabilecek hataların daha erkan tespit edilmesini sağlar
*/

let foo: number = 20;
foo = 30;

/*
 * Javascript'de bulunan veri tipleri:
 * number
 * string
 * boolean
 * object >
 * array >
 * function >
 * null
 * undefined
 * symbol
 * bigint
 */

let value1: string = "udemig";
let value2: number = 356;
let value3: boolean = false;
let value4: null = null;
let value5: undefined = undefined;
let value6: undefined;
let value7: object = {};
let value8: object = [];
let value9: object = () => {};
let value10: symbol = Symbol("123");
let value11: bigint = 10n;

/*
 ! Type Inferance
 * Eğer bir değişkenin tipini belirlemezsek TS kendisi değişkenin değerine göre otomatik olarak belirler
 * Bu özelliği mümkünse hiç kullanmazsak daha iyi (Bazen olması gereken tip yerine yanlış tip algılayabiliyor)
 */

let value12 = 657;
