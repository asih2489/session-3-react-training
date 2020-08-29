function Page({ stars }) {
  return <div>Next stars: {stars}</div>;
}

export async function getServerSideProps(context) {
  const response = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await response.json();
  return {
    props: {
      stars: json.stargazers_count,
    }, // will be passed to the page component as props
  };
}

export default Page;
