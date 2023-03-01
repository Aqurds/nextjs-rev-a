import { useState } from 'react';
import useCounter from '../components/useCounter';

const Counter = () => {
  const [showCount, setShowCount] = useState<boolean>(true);
  const { count, increment, decrement } = useCounter();

  const handleToggleCount = () => {
    setShowCount((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggleCount}>Toggle Count</button>
      {showCount && <p>Count: {count}</p>}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
