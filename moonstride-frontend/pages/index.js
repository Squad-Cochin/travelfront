import ListingPage from "./designs/ActivityListing/Listing";
import Head from "next/head";
import { useState } from "react";
const Home = () => {

  const [headerValue, setheaderValue] = useState('Moonstride');
  //let searchData = JSON.parse(localStorage.getItem("searchdata")) || [];
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
      <ListingPage setheaderValue={setheaderValue}/>
    </>
  );
};

export default Home;

