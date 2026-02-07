const FirstExa = () => {
  // ağır bir hesaplama yaptığımız seneryoyu simüle edelim

  // a) 10k rastgele elemanlı bir sayı dizisi oluştur
  const numbers = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));

  // b) ortalama hesaplama
  const average = numbers.reduce((total, num) => total + num, 0) / numbers.length;

  return (
    <div>
      <h1>ELEMAN SAYISI: {numbers.length}</h1>
      <h1>SAYI ORTALAMASI: {average}</h1>
    </div>
  );
};

export default FirstExa;
