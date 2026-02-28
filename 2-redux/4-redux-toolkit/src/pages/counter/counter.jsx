import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../../redux/slices/counter-slice";

const Counter = () => {
  const { count } = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setCount(0))}>Sıfırla</button>
      <button onClick={() => dispatch(decrease())}>Azalt</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increase())}>Arttır</button>
    </div>
  );
};

export default Counter;
