import React from "react";
import { useState } from "react";
import Slider from "react-slick/lib/slider";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Styles from "./RoomsOptions.module.scss";
import ButtonType from "../../Button/Button";
import CheckboxType from "../../Checkbox/Checkbox";
import { CheckboxTypeCustom } from "../../Checkbox/Checkbox";

const RoomsOptions = (props) => {
  const [open, setOpen] = useState(1);
  return (
    <>
      {props.slider.map((item) => {
        return (
          <>
            <Slider
              id={item.id}
              key={item.id}
              className={Styles.detailSlider}
              {...item.settings}
            >
              {item.optionSlider.map((data) => {
                return (
                  <div
                    key={data.id}
                    id={data.id}
                    className={`${Styles.bannerslide} ${
                      open == data.id && Styles.bgActive
                    } position-relative m-0 text-center`}
                    onClick={() => {
                      setOpen(data.id);
                    }}
                  >
                    <h3 className={Styles.text}>{data.title}</h3>
                    <p className={Styles.description}>{data.description}</p>
                  </div>
                );
              })}
            </Slider>
            {open === 1 && (
              <>
                {props.tab1.map((multiple) => {
                  return (
                    <>
                      <div className={Styles.tableMainTitle}>
                        {multiple.tableMainTitle}
                      </div>
                      <div
                        key={multiple.id}
                        id={multiple.id}
                        className={Styles.tableDetail}
                      >
                        <table className="w-100">
                          <thead>
                            <tr>
                              {multiple.tableHead.map((list) => {
                                return <th key={list.id} id={list.id}>{list.title}</th>;
                              })}
                              <th className="wp10"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {multiple.tableBody.map((data) => {
                              return (
                                <tr key={data.id} id={data.id}>
                                  {data.tableBodyData.map((list) => {
                                    return <td key={list.id} id={list.id}>{list.tdData}</td>;
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className={Styles.optionWrapper}>
                          {/* <p className={`${Styles.optionText} m-0`}>{multiple.otherOptions}</p> */}
                          <div className={`${Styles.priceWrapper} d-flex justify-content-between align-items-center`}>
                            <div className="me-3">
                              <p className={`${Styles.priceText} fw-semibold m-0`}>
                                Total Price:
                              </p>
                              <p className={`${Styles.price} m-0`}>{multiple.totalPrice}</p>
                            </div>
                            <div>
                              <ButtonType
                                className={`${Styles.customButton} btntype2`}
                                name="Continue"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
            {open === 2 && (
              <>
                {props.tab2.map((multiple) => {
                  return (
                    <>
                      <div className={Styles.tableMainTitle}>
                        {multiple.tableMainTitle}
                      </div>
                      <div
                        key={multiple.id}
                        id={multiple.id}
                        className={Styles.tableDetail}
                      >
                        <table className="w-100">
                          <thead>
                            <tr>
                              {multiple.tableHead.map((list) => {
                                return <th key={list.id} id={list.id}>{list.title}</th>;
                              })}
                              <th className="wp10"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {multiple.tableBody.map((data) => {
                              return (
                                <tr key={data.id} id={data.id}>
                                  {data.tableBodyData.map((list) => {
                                    return <td key={list.id} id={list.id}>{list.tdData}</td>;
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                          <div className={Styles.optionWrapper}>
                            {/* <p className={`${Styles.optionText} m-0`}>{multiple.otherOptions}</p> */}
                            <div className={`${Styles.priceWrapper} d-flex justify-content-between align-items-center`}>
                              <div className="me-3">
                                <p className={`${Styles.priceText} fw-semibold m-0`}>
                                  Total Price:
                                </p>
                                <p className={`${Styles.price} m-0`}>{multiple.totalPrice}</p>
                              </div>
                              <div>
                                <ButtonType
                                  className={`${Styles.customButton} btntype2`}
                                  name="Continue"
                                />
                              </div>
                            </div>
                          </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
            {open === 3 && (
              <>
                {props.tab3.map((multiple) => {
                  return (
                    <>
                      <div className={Styles.tableMainTitle}>
                        {multiple.tableMainTitle}
                      </div>
                      <div
                        key={multiple.id}
                        id={multiple.id}
                        className={Styles.tableDetail}
                      >
                        <table className="w-100">
                          <thead>
                            <tr>
                              {multiple.tableHead.map((list) => {
                                return <th key={list.id} id={list.id}>{list.title}</th>;
                              })}
                              <th className="wp10"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {multiple.tableBody.map((data) => {
                              return (
                                <tr key={data.id} id={data.id}>
                                  {data.tableBodyData.map((list) => {
                                    return <td key={list.id} id={list.id}>{list.tdData}</td>;
                                  })}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                          <div className={Styles.optionWrapper}>
                            {/* <p className={`${Styles.optionText} m-0`}>{multiple.otherOptions}</p> */}
                            <div className={`${Styles.priceWrapper} d-flex justify-content-between align-items-center`}>
                              <div className="me-3">
                                <p className={`${Styles.priceText} fw-semibold m-0`}>
                                  Total Price:
                                </p>
                                <p className={`${Styles.price} m-0`}>{multiple.totalPrice}</p>
                              </div>
                              <div>
                                <ButtonType
                                  className={`${Styles.customButton} btntype2`}
                                  value="Continue"
                                />
                              </div>
                            </div>
                          </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default RoomsOptions;
RoomsOptions.defaultProps = {
  slider: [
    {
        id: 1,
        settings: {
            dots: false,
            infinite: false,
            slidesToShow: 3.5,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  horizontal: true,
                  slidesToShow: 1.5,
                },
              },
            ],
        },
        optionSlider: [
            {
                id: 1,
                title: "Rooms Only",
                description: "from $ 99 p/p",
            },
            {
                id: 2,
                title: "Rooms Only",
                description: "from $ 546 p/p",
            },
            {
                id: 3,
                title: "Rooms Only",
                description: "from $ 849 p/p",
            },
            {
                id: 4,
                title: "Rooms Only",
                description: "from $ 357 p/p",
            }
        ],
    },
  ],
  tab1: [
      {
        id: 1,
        tableMainTitle: "Room 1",
        otherOptions: "+ Show 4 more options",
        totalPrice: "US$ 1099 p/p",
        tableHead: [
          {
            id: 1,
            title: "Room Type",
          },
          {
            id: 2,
            title: "Meal Plan",
          },
          {
            id: 3,
            title: "Cost per Person",
          },
        ],
        tableBody: [
          {
            id: 1,
            tableBodyData: [
              {
                id: 1.1,
                tdData: "Superior Queen",
              },
              {
                id: 1.2,
                tdData: "Superior Queen",
              },
              {
                id: 1.3,
                tdData: "$1050",
              },
              {
                id: 1.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 2,
            tableBodyData: [
              {
                id: 2.1,
                tdData: "Superior Win",
              },
              {
                id: 2.2,
                tdData: "Superior Win",
              },
              {
                id: 2.3,
                tdData: "$1049",
              },
              {
                id: 2.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 3,
            tableBodyData: [
              {
                id: 3.1,
                tdData: "Superior Win",
              },
              {
                id: 3.2,
                tdData: "Superior Win",
              },
              {
                id: 3.3,
                tdData: "$1049",
              },
              {
                id: 3.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 4,
            tableBodyData: [
              {
                id: 4.1,
                tdData: "Superior Win",
              },
              {
                id: 4.2,
                tdData: "Superior Win",
              },
              {
                id: 4.3,
                tdData: "$1049",
              },
              {
                id: 4.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 5,
            tableBodyData: [
              {
                id: 5.1,
                tdData: "Superior Win",
              },
              {
                id: 5.2,
                tdData: "Superior Win",
              },
              {
                id: 5.3,
                tdData: "$1049",
              },
              {
                id: 5.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
        ]
      },
    ],
    
  tab2: [
      {
        id: 1,
        tableMainTitle: "Room 1",
        otherOptions: "+ Show 5 more options",
        totalPrice: "US$ 799 p/p",
        tableHead: [
          {
            id: 1,
            title: "Meal Plan",
          },
          {
            id: 2,
            title: "Room Type",
          },
          {
            id: 3,
            title: "Cost per Person",
          },
        ],
        tableBody: [
          {
            id: 1,
            tableBodyData: [
              {
                id: 1.1,
                tdData: "Superior Queen",
              },
              {
                id: 1.2,
                tdData: "Superior Queen",
              },
              {
                id: 1.3,
                tdData: "$1050",
              },
              {
                id: 1.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 2,
            tableBodyData: [
              {
                id: 2.1,
                tdData: "Superior Win",
              },
              {
                id: 2.2,
                tdData: "Superior Win",
              },
              {
                id: 2.3,
                tdData: "$1049",
              },
              {
                id: 2.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 3,
            tableBodyData: [
              {
                id: 3.1,
                tdData: "Superior Win",
              },
              {
                id: 3.2,
                tdData: "Superior Win",
              },
              {
                id: 3.3,
                tdData: "$1049",
              },
              {
                id: 3.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 4,
            tableBodyData: [
              {
                id: 4.1,
                tdData: "Superior Win",
              },
              {
                id: 4.2,
                tdData: "Superior Win",
              },
              {
                id: 4.3,
                tdData: "$1049",
              },
              {
                id: 4.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 5,
            tableBodyData: [
              {
                id: 5.1,
                tdData: "Superior Win",
              },
              {
                id: 5.2,
                tdData: "Superior Win",
              },
              {
                id: 5.3,
                tdData: "$1049",
              },
              {
                id: 5.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
        ]
      },
    ],
    
  tab3: [
      {
        id: 1,
        tableMainTitle: "Room 1",
        otherOptions: "+ Show 6 more options",
        totalPrice: "US$ 699 p/p",
        tableHead: [
          {
            id: 1,
            title: "Room Type",
          },
          {
            id: 2,
            title: "Meal Plan",
          },
          {
            id: 3,
            title: "Cost per Person",
          },
        ],
        tableBody: [
          {
            id: 1,
            tableBodyData: [
              {
                id: 1.1,
                tdData: "Superior Queen",
              },
              {
                id: 1.2,
                tdData: "Superior Queen",
              },
              {
                id: 1.3,
                tdData: "$1050",
              },
              {
                id: 1.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 2,
            tableBodyData: [
              {
                id: 2.1,
                tdData: "Superior Win",
              },
              {
                id: 2.2,
                tdData: "Superior Win",
              },
              {
                id: 2.3,
                tdData: "$1049",
              },
              {
                id: 2.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 3,
            tableBodyData: [
              {
                id: 3.1,
                tdData: "Superior Win",
              },
              {
                id: 3.2,
                tdData: "Superior Win",
              },
              {
                id: 3.3,
                tdData: "$1049",
              },
              {
                id: 3.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 4,
            tableBodyData: [
              {
                id: 4.1,
                tdData: "Superior Win",
              },
              {
                id: 4.2,
                tdData: "Superior Win",
              },
              {
                id: 4.3,
                tdData: "$1049",
              },
              {
                id: 4.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
          {
            id: 5,
            tableBodyData: [
              {
                id: 5.1,
                tdData: "Superior Win",
              },
              {
                id: 5.2,
                tdData: "Superior Win",
              },
              {
                id: 5.3,
                tdData: "$1049",
              },
              {
                id: 5.4,
                tdData: (
                  <CheckboxTypeCustom className= "customRadio" type="radio" title = "Select" group="radio"/>
                ),
              },
            ],
          },
        ]
      },
    ]
}