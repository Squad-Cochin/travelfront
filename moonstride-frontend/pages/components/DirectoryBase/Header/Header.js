// {This component displays the moonstride logo on the homepage}
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaShoppingCart } from 'react-icons/fa';
import Logo from "../../../../public/moonstride-logo.svg";
import Styles from "./Header.module.scss";
import { Button } from "react-bootstrap";

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
          <Col xs={6} lg={4} md={5}>
              <Button className={Styles.cart}>
                <FaShoppingCart /> <span> My Cart </span>
                <div className={Styles.cart_count}> 12</div>
              </Button>
          </Col>  
        </Row>
      </Container>
    </header>
    
  );
};

export default Header;


