/*
 ! Reducer Fonksiyonu
 * İki parametre alır
 * 1) state'in son hali
 * 2) dispatch edilen aksiyon
  
 * reducer fonksiyonundan return edilen değer state'in son değeri olur
 * dispatch edilen aksiyonun tipine göre koşullu bir ifadeyle hangi değerin return edileceğini belirleriz 
*/
// const counterReducer = (state, action) => {
//   if (action.type === "ARTTIR") {
//     return state + 1;
//   } else if (action.type === "AZALT") {
//     return state - 1;
//   } else if (action.type === "SIFIRLA") {
//     return 0;
//   }

//   return state;
// };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "ARTTIR":
      return state + 1;
    case "AZALT":
      return state - 1;
    case "SIFIRLA":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
