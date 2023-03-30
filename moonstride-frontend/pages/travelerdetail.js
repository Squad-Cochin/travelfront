import React from 'react'
import Head from 'next/head';
import Header from './components/DirectoryBase/Header/Header';
import TravelerDetail from './components/DirectoryBase/TravelerDetail/TravelerDetail';

export default function travelerdetail() {
  return (
    <div>
      <Head>
        <title>Traveler Detail</title>
        <meta
        name="description"
        content="Check out the Car Detail Page..."
        key="desc"
        />
      </Head>
      <Header />
      <TravelerDetail />
    </div>
  )
}
