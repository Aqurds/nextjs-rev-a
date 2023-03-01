import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCounter = (initialCount: number = 0) => {
  const [count, setCount] = useState<number>(() => {
    const cookieCount = Cookies.get('count');
    if (cookieCount !== undefined) {
      return parseInt(cookieCount);
    }
    return initialCount;
  });

  useEffect(() => {
    Cookies.set('count', count.toString(), { expires: 7 });
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

export default useCounter;
