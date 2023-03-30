import React from "react";
import Head from "next/head";
import TransferDetail from "./components/DirectoryBase/TransferDetail/TransferDetail";
import Header from "./components/DirectoryBase/Header/Header";

function transferdetail() {
  return (
    <>
      <Head>
        <title>Transfer Detail</title>
        <meta
        name="description"
        content="Check out the transfer Detail Page..."
        key="desc"
        />
      </Head>
      <Header />
      <TransferDetail />
    </>
  );
}

export default transferdetail;
