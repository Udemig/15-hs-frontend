// Dizi tipi tanımlamanın 2 farklı yolu vardır

const ogrenciler1: string[] = ["Ali", "Ayşe", "Murat"];

const ogrenciler2: Array<string> = ["Ali", "Ayşe", "Murat"];

// Union type ile dizi kullanımı
const karisik1: (string | number)[] = ["a", 1, "b"];

const karisik2: Array<string | number> = ["a", 1, "b"];
