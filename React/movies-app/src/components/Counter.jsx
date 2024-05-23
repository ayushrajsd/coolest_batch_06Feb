import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        className="p-3 m-3 border border-gray-400"
        onClick={() => dispatch(increment())}
      >Increment</button>
      <button
        className="p-3 m-3 border border-gray-400"
        onClick={() => dispatch(decrement())}
      >Decrement</button>
    </div>
  );
};

export default Counter;