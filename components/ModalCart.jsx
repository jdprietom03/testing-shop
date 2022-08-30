import { useRef, useEffect } from 'react';

import { useUserContext } from '../context/UserContextProvider';
import { convertToCurrency } from '../util/utils';
import classes from './../styles/Cart.module.css';

function Item({ image, title, price, currency }) {
  return (
    <div className={classes.item}>
      <div className={classes.item_image}>
        <img src={image} alt="item_image" />
      </div>
      <div className={classes.item_body}>
        <h5 className={classes.item_title}>{title}</h5>
        <span className={classes.item_price}>
          {convertToCurrency(currency, price)}
        </span>
        <span className={classes.item_quantity}>X4</span>
      </div>
    </div>
  );
}

export default function ModalCart({ coordinates, enabled }) {
  const { cartProducts } = useUserContext();
  const myBox = useRef(null);

  useEffect(() => {
    if (!myBox.current || !coordinates) return;

    myBox.current.style.right = `${coordinates[0]}px`;
    myBox.current.style.top = `${coordinates[1]}px`;
  }, [myBox, coordinates]);

  if (!enabled) return <></>;

  return (
    <div className={classes.modal_cart} ref={myBox}>
      <span className="mini-clip">
        <span className="intern_body"></span>
      </span>
      <div className={classes.modal_cart_body}>
        <div className={classes.modal_cart_header}>
          <h5>Carrito</h5>
        </div>
        <div>
          {cartProducts.map((product) => (
            <Item {...product} />
          ))}
        </div>
        <div className={classes.modal_cart_action}>Ver carrito</div>
      </div>
    </div>
  );
}
