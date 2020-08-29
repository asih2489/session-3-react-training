import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = (props) => { 
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Ini halaman home page</h1>
      <ul>
      <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr/withoutssr">
            <a>Contoh tanpa SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr/initialprops">
            <a>Contoh SSR dengan getInitialProps</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr/serversideprops">
            <a>Contoh SSR dengan getServerSideProps</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr/staticprops">
            <a>Contoh SSR dengan getStaticProps</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr/staticpath/[staticpath]" as="/ssr/staticpath/1">
            <a>Contoh SSR dengan static path 1</a>
          </Link>
        </li>
        <li>
        <Link href="/ssr/staticpath/[staticpath]" as="/ssr/staticpath/2">
            <a>Contoh SSR dengan static path 2</a>
          </Link>
        </li>
        <li>
          <Link href="/category">
            <a>category</a>
          </Link>
        </li>
        <li>
          <Link href="/category2">
            <a>category 2</a>
          </Link>
        </li>
        <li>
          <Link href="/apollo/writestate">
            <a>Write State Apollo</a>
          </Link>
        </li>
        <li>
          <Link href="/apollo/readstate">
            <a>Read State Apollo</a>
          </Link>
        </li>
        <li>
          <Link href="/redux">
            <a>Redux Example</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
