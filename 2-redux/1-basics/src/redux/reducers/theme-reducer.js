/*
 ! Reducer fonksiyonu
 * State'i tutan ve yöneten fonksiyon
 * Tutucağı state'in ilk değerini intialState olarak tanımlarız
  
 * Parametre olarak bunları alır
 * 1) state'in güncel değeri
 * 2) dispatch edilen aksiyon
  
 * reducer fonksiyonundan return edilen değer, state'in son hali olur   
*/

const initialState = {
  theme: "dark",
  systemTheme: "light",
  fontSize: 21,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;
    case "Y":
      return state;
    case "Z":
      return state;
    default:
      return state;
  }
};

export default themeReducer;
