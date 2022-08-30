import { useRef, useState, useEffect } from 'react';

import classes from './../styles/Home.module.css';
import Menu from './../icons/menu';
import Cart from './../icons/cart';
import Link from 'next/link';
import ModalCart from './ModalCart';

export default function Navbar() {
  const myCart = useRef(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (!myCart.current) return;

    const { x, y, width, height } = myCart.current.getBoundingClientRect();

    setCoordinates([
      document.documentElement.clientWidth - x - Math.floor(width / 1),
      height + 2 * y,
    ]);
  }, [myCart]);

  return (
    <nav className={classes.nav}>
      <div className={classes.nav_body}>
        <div className={classes.nav_menu}>
          <Menu />
        </div>
        <div className={classes.actions}>
          <div className={classes.action_cart} ref={myCart}>
            <Link href="/see/cart">
              <a>
                <span className="cart-selected">0</span>
                <Cart />
              </a>
            </Link>
            <ModalCart coordinates={coordinates} />
          </div>
        </div>
      </div>
    </nav>
  );
}
