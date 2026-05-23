import { useSelector,useDispatch } from "react-redux";
import {increment,decrement,reset} from "./reduxSlice/countSlice.js"

const App = () => {

  let count = useSelector(state => state.counter.count)
  let user = useSelector(state=> state.user.user)
  let dispatch = useDispatch()
  console.log(count);

  return (
    <div className="border m-50">
      <h1 className="text-center text-3xl my-8">{count}</h1>
      <div className="flex justify-center">
        <button className="btn" onClick={() => dispatch(increment())}>Increment</button>
      <button className="btn" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="btn" onClick={() => dispatch(reset())}>Reset</button>
      </div>


      <div>
        <form>
          Name:<input type="text"  />
          
        </form>
      </div>
    </div>
  );
};

export default App;
