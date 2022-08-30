import '../styles/globals.css';
import UserContextProvider from '../context/UserContextProvider';
import AppContextProvider from './../context/AppContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </AppContextProvider>
  );
}

export default MyApp;
