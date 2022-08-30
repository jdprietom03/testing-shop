import Product from './Product';
import classes from './../styles/Product.module.css';
import { useUserContext } from '../context/UserContextProvider';

export default function Shop({ user, products }) {
  return (
    <main>
      <div className={classes.filter}>
        <div className={classes.filter_button}>Filtrar</div>
      </div>
      <div className={classes.products}>
        {products.map((p) => (
          <Product {...p} />
        ))}
      </div>
    </main>
  );
}
