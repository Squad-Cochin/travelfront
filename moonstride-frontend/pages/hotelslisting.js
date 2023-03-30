import React from 'react'
import Head from 'next/head';
import Header from "./components/DirectoryBase/Header/Header";
import HotelsListing from './components/DirectoryBase/HotelsListing/HotelsListing';

function hotelslisting() {
  return (
    <>
    <Head>
      <title>Hotels Listing</title>
      <meta
      name="description"
      content="Check out the Hotels Listing Page..."
      key="desc"
      />
    </Head>
    <Header />
    <HotelsListing />
    </>
  )
}

export default hotelslisting;