// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} isLogin={false} />
  );
}

export default MyApp;
