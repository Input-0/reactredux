import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./slice/CounterSlice";

const App = () => {

  let count = useSelector((state) => state.counter.count)
  let dispatch = useDispatch()
  return (
    <div className="flex justify-center flex-col">
      <h2>Count:{count}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decremnt</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
};

export default App;
