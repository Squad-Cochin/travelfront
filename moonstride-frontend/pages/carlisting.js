import { Container } from "react-bootstrap";
import Header from "./components/DirectoryBase/Header/Header";
import { ListingCarSearchbar } from "./components/DirectoryBase/ListingSearchbar/ListingSearchbar";
import ActivityFilter from "./components/DirectoryBase/ActivityFilter/ActivityFilter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/DirectoryBase/Sidebar/Sidebar";
import CarsProbox from "./components/CarsProbox/CarsProbox";
import Head from "next/head";

const filterData = [
  { id: 1, title: "Recommended" },
  { id: 2, title: "Oldest" },
  { id: 3, title: "Newest" },
  { id: 4, title: "Price" },
];
export default function carListing() {
  return (
    <>
    <Head>
      <title>Carlisting</title>
      <meta property="og:title" content="My page title" key="title" />
      <meta
        name="description"
        content="Check out the Car Listing Page..."
        key="desc"
      />
    </Head>
    <Container>
      <Header />
      <ListingCarSearchbar />
      <ActivityFilter dataArray={filterData} />
      <Row>
        <Col xl={3} lg={4}>
        <div className={`pageSidebar`}>
          <Sidebar />
        </div>
        </Col>
        <Col xl={9} lg={8}>
          <CarsProbox />
        </Col>
      </Row>
      </Container>
    </>
  );
}
