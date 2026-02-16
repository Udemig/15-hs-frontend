import { useState, useMemo } from "react";

const FirstExa = () => {
  const [count, setCount] = useState(1);

  /*
   * Bir react bileşeni her render olduğund içerisindeki hesapalamalar tekrar çalışır
   * Eğerki bu hesaplama kapsamlıysa her render sırasında tekrar yapılması aşırı bellek/işlemci kullanımına sebep olur
   * useMemo() hesaplamayı yapar ardından sonucunu cache'de saklar.
   * Component her render olduğunda hesaplamayı baştan yapmak yerine cache'de tuttuğu  önceki hesaplamanın sonucunu getirir
   * useMemo olmadan                          useMemo ile
   * 10m'luk diziyi hesapla > 5sn             10m'luk diziyi hesapla > 5sn
   * 10m'luk diziyi hesapla > 5sn             10m'luk diziyi hesapla > 1ms
   * 10m'luk diziyi hesapla > 5sn             10m'luk diziyi hesapla > 1ms
   */

  // ağır bir hesaplama yaptığımız seneryoyu simüle edelim
  const average = useMemo(() => {
    // a) 10k rastgele elemanlı bir sayı dizisi oluştur
    const numbers = Array.from({ length: 10000000 }, () => Math.floor(Math.random() * 1000));

    // b) ortalama hesaplama
    return numbers.reduce((total, num) => total + num, 0) / numbers.length;
  }, []);

  return (
    <div>
      <h1>useMemo()</h1>
      <h2>SAYI ORTALAMASI: {average}</h2>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default FirstExa;
