export const initialState = { theme: "AÇIK", todos: [] };

const todoReducer = (state, action) => {
  switch (action.type) {
    case "TEMA_DEĞİŞ":
      // yeni temayı belirle
      const newTheme = state.theme === "KOYU" ? "AÇIK" : "KOYU";
      // state'in yeni değerini return et
      return { ...state, theme: newTheme };

    case "EKLE":
      // yeni todo nesnesi oluştur
      const newTodo = { text: action.payload, id: new Date().getTime() };

      // yeni todo nesnesini diziye ekle
      const updatedTodos = [...state.todos, newTodo];

      // state'in yeni değerini return et
      return { ...state, todos: updatedTodos };

    case "SİL":
      // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // state'in son halinir eturn et
      return { ...state, todos: filtredTodos };

    default:
      return state;
  }
};

export default todoReducer;
