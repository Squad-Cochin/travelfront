import ListingPage from "./designs/ActivityListing/Listing";
import Head from "next/head";

const Home = () => {

  //let searchData = JSON.parse(localStorage.getItem("searchdata")) || [];
  let headerValue = 'Moonstride';
 
  return (
    <>
      <Head>
        <title>{headerValue}</title>
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

