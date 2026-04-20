import { useRef, useState } from "react";
import type { FormType } from "./components/form";

const App = () => {
  const [count, setCount] = useState<number>(45);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <h1>{count}</h1>

      <input ref={inputRef} type="text" />
      <button>as</button>
      <form></form>
      <table></table>
    </div>
  );
};

export default App;
