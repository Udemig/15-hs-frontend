import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const Counter = () => {
  /*
   * useReducer hook'u parametre olarak iki değer alır
   * 1) reducer fonksiyon
   * * state'in nasıl değişeceğine karar veren fonksiyon
   * 2) intial state
   * * state'in başlangıç değeri
   
   * useReducer'ı çağırdığımız 2 değer döndürür
   * 1) state'in güncel değeri
   * 2) action'u reducer'a aktarmaya yarayan fonksiyon
  */
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>{state}</h1>

      <button onClick={() => dispatch({ type: "ARTTIR" })}>+</button>
      <button onClick={() => dispatch({ type: "AZALT" })}>-</button>
      <button onClick={() => dispatch({ type: "SIFIRLA" })}>0</button>
    </div>
  );
};

export default Counter;
