////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
//                            FILE IS A COMPONENT FOR SHOWING BREADCRUMB                                  //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////


import Breadcrumb from "react-bootstrap/Breadcrumb";
import Styles from "./BreadcrumbType.module.scss";
import Container from "react-bootstrap/Container";
import Wishlist from "../../../../public/images/wishlist.svg";
import Wishlistfill from "../../../../public/images/wishlist-fill.svg";
import Share from "../../../../public/images/share.svg";
import Image from "next/image";
import Link from "next/link";

// FUNCTION FOR SHOWING BREADCRUMB
function BreadcrumbType(props) {
  return (
    <div className={Styles.breadcrumbOuter}>
      <Container>
        <div className={Styles.breadcrumbList}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Destinations</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Cancun</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Bsea Cancún Plaza Hotel</Breadcrumb.Item>
          </Breadcrumb>
          <div className={Styles.storeList}>
            <Link className={Styles.shareBtn} href="/">
              <Image src={Share} alt="" />
            </Link>
            <Link className={Styles.wishlistBtn} href="/">
              {props.wishlist? <Image src={Wishlistfill} alt="" />: <Image src={Wishlist} alt="" />}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BreadcrumbType;
