import React from 'react'
import { Col, Row, Container} from "react-bootstrap";
import BookingProcess from '../BookingProcess/BookingProcess';
import Sidebar from '../Sidebar/Sidebar';
import Styles from './TravelerForm.module.scss'
import SelectType from '../Select/Select';
import { TravelSidebar } from '../DetailSidebar/DetailSidebar';
import InputType from '../../Input/Input';
import Select, { StylesConfig,components } from 'react-select';
import Accordion from "react-bootstrap/Accordion";

// function TravelerForm() {
//   return (
//     <div>
//     {/* <Container> */}
//     {/* processDetail={processdetail} */}
        
//         <Row className="mt-4">
//           <Col md={4} lg={3}>
//               <Row>
//                 <Col sm={6} lg={6}>
//                   <SelectType selectarr={sortByOptions} label="Title" mandatory="*"/>
//                 </Col>
//                 <Col sm={6} lg={6}>
//                   <SelectType selectarr={genderOptions} label="Gender" mandatory="*"/>
//                 </Col>
//               </Row>
//           </Col>
//           <Col lg={3} sm={4}>
//             <InputType label="First Name" placeholder="" mandatory="*" />
//           </Col>
//           <Col lg={3} sm={4}>
//             <InputType label="Middle Name" placeholder=""  />
//           </Col>
//           <Col lg={3} sm={4}>
//             <InputType label="Last Name" placeholder="" mandatory="*" />
//           </Col>
          
//           <Row>
//           <span className='mb-2'>Date of Birth</span>
//             <Col lg={2} sm={3}>
//               <SelectType label="" selectarr={dayOptions} />
//             </Col>
//             <Col lg={2} sm={3}>
//               <SelectType label="" selectarr={monthOptions} />
//             </Col>
//             <Col lg={2} sm={3}>
//               <SelectType label="" selectarr={yearOptions} />
//             </Col>
//           </Row>
          
//           <Col lg={4} sm={6}>
//             <InputType type="email" label="Email" placeholder="" mandatory="*"/>
//           </Col>
//           <Col lg={4} sm={6} >
//             <InputType  label="Mobile Number" placeholder="" mandatory="*"/>
//           </Col>
//           <Row>
//           <Col lg={4} sm={4}>
//           <InputType  label="Address 1" placeholder="" mandatory="*"/>
//           </Col>
//           <Col lg={4} sm={4}>
//           <InputType  label="Address 2" placeholder=""/>
//           </Col>
//           <Col lg={4} sm={4}>
//           <InputType  label="Town/City" placeholder="" mandatory="*"/>
//           </Col>
//           </Row>
//           <Row>
//           <Col lg={4} sm={6}>
//           <InputType  label="State/Province" placeholder=""/>
//           </Col>
//           <Col lg={4} sm={6}>
//           <InputType  label="Postcode" placeholder="" mandatory="*"/>
//           </Col>
//           <Col lg={4} sm={12}>
//           <SelectType selectarr={countryOptions} label="Country" mandatory="*"/>
//           </Col>
//           </Row>
          
//         </Row>
//     </div>
//   )
// }
function FormDetail(props) {
  return(
    <div className={Styles.accordianWrapper} >
        <Accordion>
          {props.accordianData.map((data) => {
          return(
          <Accordion.Item key={data.id} eventKey={data.eventkey}>
            <Accordion.Header>
              <div className="accordianTitle">{data.title}
              </div>
            </Accordion.Header>
            <Accordion.Body>
            <Row className="mt-4">
              <Col md={4} lg={3}>
                  <Row>
                    <Col sm={6} lg={6}>
                      <SelectType selectarr={sortByOptions} label="Title" mandatory="*"/>
                    </Col>
                    <Col sm={6} lg={6}>
                      <SelectType selectarr={genderOptions} label="Gender" mandatory="*"/>
                    </Col>
                  </Row>
              </Col>
              <Col lg={3} sm={4}>
                <InputType label="First Name" placeholder="" mandatory="*" />
              </Col>
              <Col lg={3} sm={4}>
                <InputType label="Middle Name" placeholder=""  />
              </Col>
              <Col lg={3} sm={4}>
                <InputType label="Last Name" placeholder="" mandatory="*" />
              </Col>
              
              <Row>
              <span className='mb-2'>Date of Birth</span>
                <Col lg={2} sm={3}>
                  <SelectType label="" selectarr={dayOptions} />
                </Col>
                <Col lg={2} sm={3}>
                  <SelectType label="" selectarr={monthOptions} />
                </Col>
                <Col lg={2} sm={3}>
                  <SelectType label="" selectarr={yearOptions} />
                </Col>
              </Row>
              
              <Col lg={4} sm={6}>
                <InputType type="email" label="Email" placeholder="" mandatory="*"/>
              </Col>
              <Col lg={4} sm={6} >
                <InputType  label="Mobile Number" placeholder="" mandatory="*"/>
              </Col>
              <Row>
              <Col lg={4} sm={4}>
                <InputType  label="Address 1" placeholder="" mandatory="*"/>
              </Col>
              <Col lg={4} sm={4}>
                <InputType  label="Address 2" placeholder=""/>
              </Col>
              <Col lg={4} sm={4}>
                <InputType  label="Town/City" placeholder="" mandatory="*"/>
              </Col>
              </Row>
              <Row>
              <Col lg={4} sm={6}>
                <InputType  label="State/Province" placeholder=""/>
              </Col>
              <Col lg={4} sm={6}>
                <InputType  label="Postcode" placeholder="" mandatory="*"/>
              </Col>
              <Col lg={4} sm={12}>
                <SelectType selectarr={countryOptions} label="Country" mandatory="*"/>
              </Col>
              </Row>
            </Row>
            </Accordion.Body>
          </Accordion.Item>
          )
        })}
      </Accordion>
      
        <h3 className={Styles.paymentTitle}>Payment Contact detail</h3>
      
      <Row className="mt-4">
          <Col md={4} lg={3}>
                  <SelectType selectarr={sortByOptions} label="Title" mandatory="*"/>
          </Col>
          <Col lg={3} sm={4}>
            <InputType label="First Name" placeholder="" mandatory="*" />
          </Col>
          <Col lg={3} sm={4}>
            <InputType label="Middle Name" placeholder=""  />
          </Col>
          <Col lg={3} sm={4}>
            <InputType label="Last Name" placeholder="" mandatory="*" />
          </Col>
          
          {/* <Row>
          <span className='mb-2'>Date of Birth</span>
            <Col lg={2} sm={3}>
              <SelectType label="" selectarr={dayOptions} />
            </Col>
            <Col lg={2} sm={3}>
              <SelectType label="" selectarr={monthOptions} />
            </Col>
            <Col lg={2} sm={3}>
              <SelectType label="" selectarr={yearOptions} />
            </Col>
          </Row> */}
          
          <Col lg={4} sm={6}>
            <InputType type="email" label="Email" placeholder="" mandatory="*"/>
          </Col>
          <Col lg={4} sm={6} >
            <InputType  label="Mobile Number" placeholder="" mandatory="*"/>
          </Col>
          <Row>
          <Col lg={4} sm={4}>
          <InputType  label="Address 1" placeholder="" mandatory="*"/>
          </Col>
          <Col lg={4} sm={4}>
          <InputType  label="Address 2" placeholder=""/>
          </Col>
          <Col lg={4} sm={4}>
          <InputType  label="Town/City" placeholder="" mandatory="*"/>
          </Col>
          </Row>
          <Row>
          <Col lg={4} sm={6}>
          <InputType  label="State/Province" placeholder=""/>
          </Col>
          <Col lg={4} sm={6}>
          <InputType  label="Postcode" placeholder="" mandatory="*"/>
          </Col>
          <Col lg={4} sm={12}>
          <SelectType selectarr={countryOptions} label="Country" mandatory="*"/>
          </Col>
          </Row>
          
      </Row>
    </div>
  )

}
// export default TravelerForm;
export {FormDetail};

const sortByOptions = [
  {name: "Select", id:"1"},
  {name: "Mr" ,id:"2"},
  {name: "Mrs" ,id:"3"},
  {name: "Miss" ,id:"4"},
  {name: "Ms" ,id:"5"},
  {name: "Dr" ,id:"6"},
];
const genderOptions = [
  {name:"Select", id:"1"},
  {name:"Male", id:"2"},
  {name:"Female", id:"3"},
];
const dayOptions = [
  {name:"Day", id:"1"},
  {name:"01", id:"2"},
  {name:"02", id:"3"},
  {name:"03", id:"4"},
  {name:"04", id:"5"},
  {name:"05", id:"6"},
];
const monthOptions = [
  {name:"Month", id:"1"},
  {name:"Jan", id:"2"},
  {name:"Feb", id:"3"},
  {name:"Mar", id:"4"},
  {name:"Apr", id:"5"},
  {name:"May", id:"6"},
];
const yearOptions = [
  {name:"Year", id:"1"},
  {name:"2023", id:"2"},
  {name:"2022", id:"3"},
  {name:"2021", id:"4"},
  {name:"2020", id:"5"},
  {name:"2019", id:"6"},
];
const countryOptions = [
  {name:"United States of America", id:"1"},
  {name:"United Kingdom", id:"2"},
  {name:"India", id:"3"},
  {name:"Australia", id:"4"},
  {name:"Canada", id:"5"},
  {name:"Dubai", id:"6"},
];
FormDetail.defaultProps = {
  accordianData:[
    {
      id:1,
      eventkey: "0",
      title:"Traveler 1 (Adult)",
    }
    
  ]
}
// const processdetail=[
//     {
//         id:'1',
//         title: "Search"
//     },
//     {
//         id:'2',
//         title: "Booking"
//     }
// ]