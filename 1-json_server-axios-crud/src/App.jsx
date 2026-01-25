import { useEffect, useState } from "react";
import ListItem from "./components/list-item";
import Form from "./components/form";
import api from "./api";

const App = () => {
  // .todo verilerini tuttuğumuz state
  const [todos, setTodos] = useState([]);

  // useEffect ile component'ın ekrana basılm anında fn çalıştır
  useEffect(() => {
    // api'a gönderilecek parametreleri hazırla
    const params = { _sort: "date", _order: "desc" };

    // api'dan todo'ları almak için get isteği
    api.get("/todos", { params }).then((res) => setTodos(res.data));
  }, []);

  // kaldırma fonksiyonu
  const deleteTodo = (id) => {
    // api'a todoyu kaldırmak için istek at
    api
      .delete(`/todos/${id}`)
      // api isteği başarılı olursa state'den de kaldır
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  // ekleme fonksiyonu
  const createTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="container">
      <header>
        <h1>Todo App</h1>
        <p>Pratik için basit CRUD uygulaması</p>
      </header>

      <Form createTodo={createTodo} />

      <div className="list">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
