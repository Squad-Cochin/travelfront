import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/DirectoryBase/Header/Header";
//import Header from "../../components/DirectoryBase1/Header/Header";
import ListingSearchbar from "../../components/DirectoryBase/ListingSearchbar/ListingSearchbar";
import ActivityFilter from "../../components/DirectoryBase/ActivityFilter/ActivityFilter";
import ListingProbox from "../../components/DirectoryBase/ListingProbox/ListingProbox";
import Sidebar from "../../components/DirectoryBase/Sidebar/Sidebar";
import ButtonType from "../../components/Button/Button";
import Styles from "./Listing.module.scss";

const ListingPage = () => {
  return (
    <>
      <Header />
      <div className={Styles.listingpage}>
        <Container>
          <ListingSearchbar template="home" />
        </Container>
      </div>
      <Container>
        <ActivityFilter />
      </Container>
      <Container>
        <Row>
          <Col xl={3} lg={4}>
          <div className={`pageSidebar`}>
              <Sidebar />
          </div>
          </Col>
          <Col xl={9} lg={8}>
            <ListingProbox boxData = {boxData}/>
            <div className="text-center">
              <ButtonType className="btntype2" name="Show More" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListingPage;

const boxData = [
  {
    id: 1,
    title: "Barcelona Sailing Experience - Sunset",
    type: "Cruises and water sports",
    time: "3 hours",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
    linkText: "More details",
    price: "$21.00",
    rating: "4.5/5",
    ratingCount: "68 ratings",
    buttonText: "Book"
  },
  {
    id: 2,
    title: "Barcelona Sailing Experience - Sunset",
    type: "Cruises and water sports",
    time: "2 hours",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
    linkText: "More details",
    price: "$12.00",
    rating: "4.7/5",
    ratingCount: "68 ratings",
    buttonText: "Book"
  },
  {
    id: 3,
    title: "Barcelona Sailing Experience - Sunset",
    type: "Cruises and water sports",
    time: "5 hours",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
    linkText: "More details",
    price: "$51.00",
    rating: "4.4/5",
    ratingCount: "68 ratings",
    buttonText: "Book"
  }
]
