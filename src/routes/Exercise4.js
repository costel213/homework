import { useState } from "react";

function Exercise4() {
  const [count, setCount] = useState(1);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <div>
        <p>
          Use the useState React hook to track how many times a button is
          clicked, and display the number.
        </p>
        <div className="solution-container">
          <button onClick={handleCount}>Count</button>
          <p>{count}</p>
        </div>
      </div>
    </div>
  );
}

export default Exercise4;
