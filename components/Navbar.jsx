import { useRef, useState, useEffect } from 'react';

import classes from './../styles/Home.module.css';
import Menu from './../icons/menu';
import Cart from './../icons/cart';
import ModalCart from './ModalCart';

export default function Navbar() {
  const myCart = useRef(null);
  const [coordinates, setCoordinates] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    if (!myCart.current) return;

    const { x, y, width, height } = myCart.current.getBoundingClientRect();

    setCoordinates([
      document.documentElement.clientWidth - x - width,
      height + 2 * y,
    ]);
  }, [myCart, openCart]);

  return (
    <nav className={classes.nav}>
      <div className={classes.nav_body}>
        <div className={classes.nav_menu}>
          <Menu />
        </div>
        <div className={classes.actions}>
          <div className={classes.action_search}>
            <input type="text" value="" placeholder="Buscar producto" />
          </div>
          <div className={classes.action_cart} ref={myCart}>
            <a onClick={() => setOpenCart(!openCart)}>
              <span className="cart-selected">0</span>
              <Cart />
            </a>
            <ModalCart coordinates={coordinates} enabled={openCart} />
          </div>
        </div>
      </div>
    </nav>
  );
}
