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

export default function ModalCart() {
  const { cartProducts } = useUserContext();

  return (
    <div className={classes.modal_cart}>
      <div className={classes.modal_cart_body}>
        <div className={classes.modal_cart_header}>
          <h5>Carrito</h5>
        </div>
        <div>
          {cartProducts.map((product) => (
            <Item {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
