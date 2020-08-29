import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../lib/apollo";

const CATEGORY_LIST = gql`
  query Category($ids: String!) {
    categoryList(filters: { ids: { eq: $ids } }) {
      id
      name
      url_key
      url_path
      display_mode
      children {
        id
        name
        url_key
        url_path
        display_mode
      }
    }
  }
`;

const Category = () => {
  const { loading, error, data } = useQuery(CATEGORY_LIST, {
    variables: { ids: "38" },
    // fetchPolicy: 'no-cache'
  });

  if (loading) {
    return <div>loading...</div>;
  }

  const category = data.categoryList;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>List Category</h1>
        <ul>
          {category.map((val, idx) => {
            return <li key={idx}>{val.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default withApollo({ ssr: true })(Category);
