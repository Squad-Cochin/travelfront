import Head from "next/head";
import ListingPage from "../designs/ActivityListing/Listing";
import DetailPage from "../designs/ActivityDetail/Detail";
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { handle } = router.query;
  return (
    handle ? <DetailPage handle={handle} /> : <>Loading...</>
    // <>
    //   <Head>
    //     <title>Activity Detail</title>
    //     <meta
    //     name="description"
    //     content="Check out the transfer Detail Page..."
    //     key="desc"
    //     />
    //   </Head>
    //   {pid && <DetailPage  pid={pid}/>}
    // </>
  );
};

export default Home;
