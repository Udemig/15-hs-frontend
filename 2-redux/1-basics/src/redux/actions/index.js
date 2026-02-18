import ACTION_TYPES from "./action-types";

// Component içerisindeki aksiyon yazımını daha minimal hale getirmek için aksiyon oluşturan fonksiyonlar hazırlayabiliriz
export const createTodo = (payload) => ({ type: ACTION_TYPES.CREATE, payload });
export const updateTodo = (payload) => ({ type: ACTION_TYPES.UPDATE, payload });
export const deleteTodo = (payload) => ({ type: ACTION_TYPES.DELETE, payload });
export const toggleTodo = (payload) => ({ type: ACTION_TYPES.TOGGLE, payload });
export const setLoading = (payload) => ({ type: ACTION_TYPES.LOADING, payload });
export const setError = (payload) => ({ type: ACTION_TYPES.ERROR, payload });
export const setTodos = (payload) => ({ type: ACTION_TYPES.SUCCESS, payload });
