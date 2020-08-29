const Page = (props) => {
    const [response, setResponse] = React.useState({});
    const result = async () => { 
        const response = await fetch("https://api.github.com/repos/vercel/next.js");
        const json = await response.json();
        setResponse(json)
    }
    if (!response.id) {
        result();
    }
    console.log(response)
    return <div>Next stars: {response.stargazers_count}</div>;
}

export default Page;
