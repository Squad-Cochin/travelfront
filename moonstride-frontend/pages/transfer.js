import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Head from "next/head"
import Sidebar from "./components/DirectoryBase/Sidebar/Sidebar"
import TransferListing from "./components/TransferListing"
import TransferHeader from "./components/TransferListing/TransferHeader"
import TransferHeader2 from "./components/TransferListing/TransferHeader2"
import Header from "./components/DirectoryBase/Header/Header"

function Transfer(){
    return (
        <>
        <Head>
            <title>Transfer</title>
            <meta
            name="description"
            content="Check out the Transfer Page..."
            key="desc"
            />
        </Head>
        <Header />
        <Container>
            <TransferHeader />
            <TransferHeader2 />
            <Row className="mt-3">
                <Col lg={3}>    
                <div className={`pageSidebar`}>
                    <Sidebar />
                </div>
                </Col>
                <Col lg={9}>
                    <TransferListing />
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Transfer