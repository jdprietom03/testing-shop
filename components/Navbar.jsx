import classes from './../styles/Home.module.css';
import Menu from './../icons/menu';
import Cart from './../icons/cart';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav_body}>
        <div className={classes.nav_menu}>
          <Menu />
        </div>
        <div className={classes.actions}>
          <div className={classes.action_cart}>
            <Link href="/see/cart">
              <a>
                <span className="cart-selected">0</span>
                <Cart />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}