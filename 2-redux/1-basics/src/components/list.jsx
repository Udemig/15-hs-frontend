import { useSelector } from "react-redux";
import Card from "./card";

const List = () => {
  // useSelector hook'u
  // store'da tutulan verilere abone olmaya yarar
  // parametre olarak store'a erişen bir fonksiyon alır
  const { todos, isLoading, error } = useSelector((store) => store.todoReducer);

  if (isLoading) return <p>Yükleniyor...</p>;

  if (error) return <p>Hata: {error}</p>;

  return (
    <div className="grid gap-10 mt-10">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
