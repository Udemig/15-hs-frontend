import { setError, setLoading, setTodos } from ".";
import api from "../../api";
import ACTION_TYPES from "./action-types";

/*
 ! Thunk Aksiyonu
 * İki fonksiyonu iç içe yazarız
 * İçerideki fonks asenkron olabilir ve dispatch'i parametre olarak alır
*/

export const getTodos = () => (dispatch) => {
  dispatch(setLoading());

  api
    .get("/todos")
    .then((res) => dispatch(setTodos(res.data)))
    .catch((err) => dispatch(setError(err.message)));
};

export const createTodo = (newTodo) => (dispatch) => {
  api
    .post("/todos", newTodo)
    .then(() => dispatch({ type: ACTION_TYPES.CREATE, payload: newTodo }))
    .catch(() => alert("işlem başarısız oldu"));
};

export const deleteTodo = (id) => (dispatch) => {
  api
    .delete(`/todos/${id}`)
    .then(() => dispatch({ type: ACTION_TYPES.DELETE, payload: id }))
    .catch(() => alert("işlem başarısız"));
};

export const toggleStatus =
  ({ id, isDone }) =>
  (dispatch) => {
    api
      .patch(`/todos/${id}`, { isDone })
      .then(() => dispatch({ type: ACTION_TYPES.TOGGLE, payload: id }))
      .catch(() => alert("işlem başarısız"));
  };

export const updateTodo = (todo) => (dispatch) => {
  api
    .put(`/todos/${todo.id}`, todo)
    .then(() => dispatch({ type: ACTION_TYPES.UPDATE, payload: todo }))
    .catch(() => alert("işlem başarısız oldu"));
};
