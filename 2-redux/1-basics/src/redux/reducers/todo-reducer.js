import ACTION_TYPES from "../actions/action-types";

const initialState = {
  todos: [],
  isLoading: true,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE:
      // aksiyonun payload'ı gelen yeni nesneyi diziye ekle
      const newTodos = state.todos.concat(action.payload);
      // state'in son halini return et
      return { ...state, todos: newTodos };

    case ACTION_TYPES.DELETE:
      // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);
      // state'in son halini return et
      return { ...state, todos: filtredTodos };

    case ACTION_TYPES.TOGGLE:
      // aksiyonun paylo'ı ile gelen todo'nun isDone değerini güncelle
      const toggledTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
      // state'in son halini retun et
      return { ...state, todos: toggledTodos };

    case ACTION_TYPES.UPDATE:
      // aksiyon'un payload'ı ile gelen todo'yu dizide güncelle
      const updatedTodos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo));

      // state'in son halini return et
      return { ...state, todos: updatedTodos };

    case ACTION_TYPES.LOADING:
      return { ...state, isLoading: true };

    case ACTION_TYPES.ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.SUCCESS:
      return { ...state, isLoading: false, error: null, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
