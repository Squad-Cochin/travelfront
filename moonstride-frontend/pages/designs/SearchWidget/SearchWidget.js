import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from "../../components/DirectoryBase/Header/Header";
import ListingSearchbar from "../../components/DirectoryBase/ListingSearchbar/ListingSearchbar";
import { ActivitySearchWidgetHome } from "../../components/DirectoryBase/ListingSearchbar/ListingSearchbar";
import ActivityFilter from "../../components/DirectoryBase/ActivityFilter/ActivityFilter";
import ListingProbox from "../../components/DirectoryBase/ListingProbox/ListingProbox";
import Sidebar from "../../components/DirectoryBase/Sidebar/Sidebar";
import ButtonType from "../../components/Button/Button";
import Styles from "./SearchWidget.module.scss";

const SearchWidgetSection = () => {
  return (
    <>
      <Header />

        <div className="container">
            <div className={Styles.searchWidgetTabsOuter}>
                <Tabs defaultActiveKey="activities" id="SearchWidgetTabs" className="mb-3">
                    <Tab eventKey="packages" title="Packages">
                        Lorem Ipsum
                    </Tab>
                    <Tab eventKey="hotels" title="Hotels">
                        Lorem Ipsum
                    </Tab>
                    <Tab eventKey="flights" title="Flights">
                        Lorem Ipsum
                    </Tab>
                    <Tab eventKey="cars" title="Cars">
                        Lorem Ipsum
                    </Tab>
                    <Tab eventKey="activities" title="Activities">
                        <div className={Styles.listingpage}>
                            <ListingSearchbar template="home"/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    </>
  );
};

export default SearchWidgetSection;
