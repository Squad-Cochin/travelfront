// {This component displays the moonstride logo on the homepage}
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/moonstride-logo.svg";
import Styles from "./Header.module.scss";

const Header = () => { 
  return (
    <header className={Styles.topbar}>
    
      <Container>
        <Link href="/listing">
          <a className={Styles.logo}>
            {/* The logo image will be displayed here */}
            <Image src={Logo} alt="Moonstride Logo" />
          </a>
        </Link>
      </Container>
    </header>
    
  );
};

export default Header;
