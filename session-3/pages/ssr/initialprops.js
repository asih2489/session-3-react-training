function Page({ stars }) {
  return <div>Next stars: {stars}</div>;
}

Page.getInitialProps = async (ctx) => {
  const response = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await response.json();
  return { stars: json.stargazers_count };
};

export default Page;
