import React from "react";

const Display = ({ count, handleIncrease }) => {
  console.log("Display Render Oldu");
  return <h2>{count}</h2>;
};

/*
 * Bu örnekte kapsayıcı compoent'ın state'leri her değiştiğinde kapsayıcının render olmasından kaynaklı display component'ı değişen state'i prop olarak almasa bile gereksiz yere render oluyor
 * Bir component'ın aldığı proplar değişmediği müddetçe kapsayıcı component kaynaklı render olması gereksiz render olarak adlandırılır
 * Bu durumun önüne React.memo() ile geçeriz
  
 ! Eğer primitive bir değer değilde referance bir değer prop olarak geliyorsa react.memo() görevini yapamaz 
 */

export default React.memo(Display);
