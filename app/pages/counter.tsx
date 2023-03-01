import { useState } from 'react';
import useCounter from '../components/useCounter';
import { ButtonInceament, ButtonDecreament, ButtonToogle, CountP } from '../components/styledComponents/Button'

const Counter = () => {
  const [showCount, setShowCount] = useState<boolean>(true);
  const { count, increment, decrement } = useCounter();

  const handleToggleCount = () => {
    setShowCount((prev) => !prev);
  };

  return (
    <div>
      <ButtonToogle onClick={handleToggleCount}>Toggle Count</ButtonToogle>
      {showCount && <CountP>Count: {count}</CountP>}
      <ButtonInceament onClick={increment}>Increment</ButtonInceament>
      <ButtonDecreament onClick={decrement}>Decrement</ButtonDecreament>
    </div>
  );
};

export default Counter;
