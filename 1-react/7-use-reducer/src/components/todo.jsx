import { useReducer } from "react";
import todoReducer, { initialState } from "../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // reducer'a haber ver
    dispatch({ type: "EKLE", payload: text });

    // formu sıfırla
    e.target.reset();
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "TEMA_DEĞİŞ" })}>Tema Değiş</button>
      <h2>Tema: {state.theme}</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo yazınız" />
        <button type="submit">Gönder</button>
      </form>

      <ul>
        {state.todos.map((todo, key) => (
          <li key={key}>
            <span>{todo.text}</span>

            <button onClick={() => dispatch({ type: "SİL", payload: todo.id })}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
