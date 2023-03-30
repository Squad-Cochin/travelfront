import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { Row } from "react-bootstrap";
import ButtonType from "../Button/Button";
import styles from "./TransferListing.module.scss";
const TransferData = [
  {
    id: 1,
    image: "tr1.png",
    title: "Shared Shuttle",
    price: "$21",
    location: "FROM2",
    noOfPerson: 0,
    noOfBags: 2,
    duration: "1h",
    enhancedCleaning: "y",
    freeCancellation: "y",
    freeCancellationDate: "Until Sun, Aug 7",
    ratings: "4.5/5 (68 ratings)",
    oneWay: "y",
  },
  {
    id: 2,
    image: "tr2.png",
    title: "Shared Shuttle",
    price: "$21",
    location: "FROM2",
    noOfPerson: 0,
    noOfBags: 2,
    duration: "1h",
    enhancedCleaning: "y",
    freeCancellation: "y",
    freeCancellationDate: "Until Sun, Aug 7",
    ratings: "4.5/5 (68 ratings)",
    oneWay: "y",
  },
];

function TransferListing() {
  return (
    <>
      {TransferData.map((data) => (
        <Row className="border-top border-bottom py-3" key={data.id}>
          <Col
            lg={3}
            md={6}
            sm={12}
            className={`${styles.listImg} mb-3 mb-md-0`}
          >
            <Image
              src={`../images/transferListing/${data.image}`}
              alt={data.title}
              width= {220}
              height= {164}
            />
          </Col>
          <Col lg={3} sm={6} xs={6}>
            <h1 className="header-type1">{data.title}</h1>
            <span className="d-block">{data.location}</span>
            {data.noOfPerson ? (
              <div className="d-inline-block w-auto mt-3 ms-2">
                <Image src="../images/transferListing/people.svg" alt="image" width= {16} height= {14} />
                <span className="px-1">{data.noOfPerson}</span>
              </div>
            ) : (
              ""
            )}
            {data.noOfBags ? (
              <div className="d-inline-block w-auto mt-3 ms-2">
                <Image src="../images/transferListing/bag.svg" alt="image" width= {16} height= {14} />
                <span className="px-1">{data.noOfBags}</span>
              </div>
            ) : (
              ""
            )}
            {data.duration ? (
              <div className="d-inline-block w-auto mt-3 ms-2">
                <Image
                  src="../images/transferListing/duration.svg"
                  alt="image"
                  width= {16} height= {14}
                />
                <span className="px-1">{data.duration}</span>
              </div>
            ) : (
              ""
            )}
            {data.enhancedCleaning ? (
              <div className="d-block mt-3">
                <Image src="../images/transferListing/enLear.svg" alt="image" width= {16} height= {14} />
                <span className="px-1">Enhanced cleaning</span>
              </div>
            ) : (
              ""
            )}
            <div className="mt-4">
              <Link href="/listing">
                <a className="link-type1 fw-bold mt-5">More details</a>
              </Link>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={6} className="d-sm-none d-md-block d-none ">
            {data.freeCancellation ? (
              <div className="d-block mt-3">
                <span className="d-block" style={{ color: "green" }}>
                  Free cancellation
                </span>
                <span>{data.freeCancellationDate}</span>
              </div>
            ) : (
              ""
            )}
            <div className="mt-3">{data.ratings}</div>
          </Col>
          <Col
            lg={3}
            sm={6}
            xs={6}
            className={`text-end ${styles.reserveBtnBlock}`}
          >
            <div className={styles.price}>{data.price}</div>
            <div className={`${styles.ReserveButton} `}>
              <ButtonType
                className="btntype1"
                name="Reserve"
                style={{ padding: "15px 35px" }}
              />
            </div>
          </Col>
        </Row>
      ))}
      <div className="text-center mt-5">
        <ButtonType className="btntype2" name="View More" />
      </div>
    </>
  );
}
export default TransferListing;
