import { useEffect } from "react";
import Form from "./components/form";
import List from "./components/list";
import { useDispatch } from "react-redux";
import { getTodos } from "./redux/actions/todo-actions";

const App = () => {
  const dispatch = useDispatch();

  // api'dan todo'ları alıp reducer'a haber ver
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="h-screen container mx-auto p-10">
      <h1 className="text-center text-2xl font-bold">
        <span className="text-yellow-600">Redux</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;
