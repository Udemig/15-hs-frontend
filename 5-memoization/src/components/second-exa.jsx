import { useState, useCallback } from "react";
import Display from "./display";

const SecondExa = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);

  /*
   * Component her render olduğunda bu fonksiyon yeniden oluşur (Bellekte farklı bir referansı oluşur)

   * Fonksiyonu prop olarak gönderdiğimiz display component'ı react.memo() kullanıyor olsa bile her render sırasında fraklı referans değerine sahip fonksiyonu prop olarak gönderdiğimiz için react.memo() bunları farklı fonksiyon sanıp görevini yapamıyor

   * useCallback aracılığı ile count değişmedikçe her render sırasında fonksiyonun yeniden farklı bir referans ile oluşmasının önüne geçtik
   */

  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <hr />
      <h1>React.Memo()</h1>

      <Display count={count} handleIncrease={handleIncrease} />
      <button onClick={handleIncrease}>Arttır</button>

      <h2>İsminiz: {name}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default SecondExa;
