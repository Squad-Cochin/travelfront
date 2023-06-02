//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//                 PAGE HAVING A COMPONENT OF MOONSTRIDE LOGO FOR THE HOME PAGE                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// IMPORT PAGES
import Logo from "../../../../public/moonstride-logo.svg";
import Styles from "./Header.module.scss";

// HEADER COMPONENT WITH MOONSTRIDE LOGO
const Header = () => { 
  return (
    <header className={Styles.topbar}>
      <Container>
      <Row className="mt-5">
          <Col xs={6} lg={8} md={7} >
              <Link href="/"> 
                <a className={Styles.logo}>
                  {/* The logo image will be displayed here */}
                  <Image src={Logo} alt="Moonstride Logo" />
                </a>
              </Link>
          </Col> 
        </Row>
      </Container>
    </header>
    
  );
};

export default Header;
