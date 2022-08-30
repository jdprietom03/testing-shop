import Head from 'next/head';
import {
  UserConsumer,
  UserConsumerWithProps,
} from '../context/UserContextProvider';
import Shop from '../components/Shop';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products List</title>
      </Head>
      <Navbar />
      <UserConsumerWithProps>
        <Shop />
      </UserConsumerWithProps>
    </div>
  );
}
