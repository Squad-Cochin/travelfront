import React from 'react'
import Head from 'next/head';
import Header from "./components/DirectoryBase/Header/Header"
import Booking from './components/DirectoryBase/Booking/Booking';

export default function booking() {
  return (
    <div>
    	<Head>
        <title>Booking</title>
        <meta
        name="description"
        content="Check out the Car Detail Page..."
        key="desc"
        />
      </Head>
      <Header />
      <Booking />
    </div>
  )
}
