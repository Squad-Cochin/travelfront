import ListingPage from "./designs/ActivityListing/Listing";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Index</title>
        <meta
        name="description"
        content="Check out the Index Page..."
        key="desc"
        />
      </Head>
      <ListingPage />
    </>
  );
};

export default Home;

