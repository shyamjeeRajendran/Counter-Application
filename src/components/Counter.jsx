import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function handleDecrement() {
    count > 0 ? setCount((prev) => prev - 1) : setCount(0);
  }

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>counter App</h1>
        <div className="show">
          <button onClick={handleDecrement}>Decrement</button>
          <h1 value={count} onChange={(e) => e.target.value} >
            {count}
          </h1 >
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <button className="reset" onClick={handleReset}>
          reset
        </button>
        {count < 1 && <p className="error">"minimum limit reached</p>}
      </div>
    </div>
  );
}

export default Counter;
