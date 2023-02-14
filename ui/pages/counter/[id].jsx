import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        counter
      </button>
      <label htmlFor="">{counter}</label>
    </div>
  );
};

export default Counter;
