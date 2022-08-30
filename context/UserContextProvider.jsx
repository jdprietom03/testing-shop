import {
  createContext,
  useMemo,
  useContext,
  useState,
  cloneElement,
} from 'react';

import data from './../util/data.json';

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(data);
  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      title: 'Laptop HP GTX3090',
      price: '20000',
      distributor: 'HP Company',
      currency: 'COP',
      tags: ['Tecnology', 'Gamer', 'HP'],
      image:
        'https://http2.mlstatic.com/D_NQ_NP_971734-MLA48635086956_122021-O.jpg',
      reference: '95485',
    },
    {
      id: 2,
      title: 'Laptop HP GTX3090',
      price: '240000',
      distributor: 'HP Company',
      currency: 'COP',
      tags: ['Tecnology', 'Gamer', 'HP'],
      image:
        'https://http2.mlstatic.com/D_NQ_NP_971734-MLA48635086956_122021-O.jpg',
      reference: '95486',
    },
  ]);

  const value = useMemo(
    () => ({ user, products, cartProducts }),
    [user, products]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const UserConsumerWithProps = ({ children }) => {
  return (
    <UserContext.Consumer>
      {(props) => cloneElement(children, { ...props })}
    </UserContext.Consumer>
  );
};

export const UserConsumer = ({ children }) => {
  return (
    <UserContext.Consumer>
      {(props) => cloneElement(children, { ...props })}
    </UserContext.Consumer>
  );
};
