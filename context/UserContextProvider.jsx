import {
  createContext,
  useMemo,
  useContext,
  useState,
  cloneElement,
} from 'react';

import data from "./../util/data.json";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(data);

  const value = useMemo(() => ({ user, products }), [user, products]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const UserConsumer = ({ children }) => {
  return (
    <UserContext.Consumer>
      {(props) => cloneElement(children, { ...props })}
    </UserContext.Consumer>
  );
};
