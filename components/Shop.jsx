import Product from './Product';
import classes from './../styles/Product.module.css';

export default function Shop({ user, products }) {
  return (
    <main>
      <div className={classes.products}>
        {products.map((p) => (
          <Product {...p} />
        ))}
      </div>
    </main>
  );
}
