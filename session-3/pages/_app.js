// import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} isLogin={false} />
    </Provider>
  );
}

export default MyApp;
