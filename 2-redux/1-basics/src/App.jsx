import Form from "./components/form";
import List from "./components/list";

const App = () => {
  return (
    <div className="h-screen container p-10">
      <h1 className="text-center text-2xl font-bold">
        <span className="text-yellow-600">Redux</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;
