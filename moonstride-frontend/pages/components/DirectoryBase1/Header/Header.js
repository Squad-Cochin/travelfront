import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import ButtonType from "../../Button/Button";
import Logo from "../../../../public/moonstride-logo-white.svg";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={Styles.topbar}>
      <Container fluid className="p-0">
        <Row className="g-0 justify-content-between align-items-center">
          <Col lg={2} md={3} xs={4} className={Styles.logo_section}>
            <Link href="/listing">
              <a className={Styles.logo}>
                <Image src={Logo} alt="Moonstride Logo" />
              </a>
            </Link>
          </Col>
          <Col xs={4} className="text-end">
            <div className="me-2">
              <ButtonType className="btntype2" name="Sign In" />
              <ButtonType className="btntype2 ms-2" name="Register" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
