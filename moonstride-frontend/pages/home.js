import SearchWidget from "./designs/SearchWidget/SearchWidget";
import Head from "next/head"; 

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
        name="description"
        content="Check out the Home Page..."
        key="desc"
        />
      </Head>
      <SearchWidget />
    </>
  );
};

export default Home;