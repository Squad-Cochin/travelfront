// {This component displays the moonstride logo on the homepage}
import Container from "react-bootstrap/Container";
import Styles from "./Footer.module.scss";

const Footer = () => { 
  return (
    <header className={Styles.Footer}>
       <div className={Styles.copyright}>Copyright &copy; 2023. All rights reserved by Moonstride</div>
    </header>
  );
};

export default Footer;
