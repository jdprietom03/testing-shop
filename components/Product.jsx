import Link from 'next/link';
import classes from './../styles/Product.module.css';
import { convertToCurrency } from './../util/utils';

export default function Product({
  title,
  price,
  currency,
  image,
  tags,
  distributor,
  reference,
}) {
  return (
    <div className={classes.product_card}>
      <div className={classes.product_card_image}>
        <img src={image} alt="Product image" />
      </div>
      <div className={classes.product_card_header}>
        <span className={classes.product_distributor}>{distributor}</span>
        <h4>{title}</h4>
      </div>
      <div className={classes.product_card_body}>
        <div className={classes.product_card_price_information}>
          <span className="sale-tag"></span>
          <span className={classes.product_price}>
            {convertToCurrency(currency, price)}
          </span>
        </div>
        <span className={classes.product_reference}>Ref: {reference}</span>
      </div>
      <div className={classes.product_card_actions}>
        <Link href="/see/product/">
          <a className={classes.product_buy_button}>Ver producto</a>
        </Link>
      </div>
    </div>
  );
}
