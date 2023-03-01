import { createContext, useContext } from 'react';
import useCounter from './useCounter';

type CountContextType = ReturnType<typeof useCounter>;

const CountContext = createContext<CountContextType>(undefined!);

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useCounter();

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
};

export const useCount = () => useContext(CountContext);
