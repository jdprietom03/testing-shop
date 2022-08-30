import { createContext, useMemo, useContext } from 'react';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
