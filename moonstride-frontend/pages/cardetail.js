import React from 'react'
import Head from 'next/head';
import CarDetail from './components/DirectoryBase/CarDetail/CarDetail'
import Header from "./components/DirectoryBase/Header/Header";

function cardetail() {
  return (
    <div>
      <Head>
        <title>cardetail</title>
        <meta
        name="description"
        content="Check out the Car Detail Page..."
        key="desc"
        />
      </Head>
      <Header />
      <CarDetail />
    </div>
  )
}

export default cardetail
