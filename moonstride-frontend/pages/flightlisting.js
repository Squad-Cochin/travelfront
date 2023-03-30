import React from 'react';
import Head from 'next/head';
import Header from "./components/DirectoryBase/Header/Header";
import FlightListing from './components/DirectoryBase/FlightListing/FlightListing';

function flightlisting() {
  return (
    <>
      <Head>
        <title>Flight Listing</title>
        <meta
        name="description"
        content="Check out the Flight Listing Page..."
        key="desc"
        />
      </Head>
      <Header />
      <FlightListing />
    </>
  )
}

export default flightlisting;