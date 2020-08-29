const Page = (props) => {
  return <div>Contoh static path: {props.url.staticpath}</div>;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { staticpath: "1" } },
      { params: { staticpath: "2" } }
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      url: params,
    },
  };
}

export default Page;
