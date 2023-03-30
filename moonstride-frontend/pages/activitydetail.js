import Head from "next/head";
import ListingPage from "./designs/ActivityListing/Listing";
import DetailPage from "./designs/ActivityDetail/Detail";

const Home = () => {
  return (
    <>
      <Head>
        <title>Activity Detail</title>
        <meta
        name="description"
        content="Check out the transfer Detail Page..."
        key="desc"
        />
      </Head>
      <DetailPage />
    </>
  );
};

export default Home;
